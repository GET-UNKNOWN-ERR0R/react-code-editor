import { useRef } from "react";
import { useParams } from "react-router-dom";
import MonacoEditor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import languages from "../data/languages";
import { languageMap } from "../data/languageMap";
import { executeCode } from "../utils/executeCode";
import EditorHeader from "../components/EditorHeader";
import OutputPanel from "../components/OutputPanel";
import InputPanel from "../components/InputPanel";
import "./Editor.css";

export default function Editor() {
    const { lang } = useParams();
    const selected = languages.find(l => l.id === lang);

    const [code, setCode] = useState(selected?.code || "");
    const [output, setOutput] = useState("");
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState("light");

    const [activeTab, setActiveTab] = useState("html");
    const [htmlCode, setHtmlCode] = useState('<h1 id="title">Hello CodePilot</h1><button id="btn">Click me</button>');

    const [cssCode, setCssCode] = useState("body{font-family:Arial,sans-serif;text-align:center;margin-top:80px;}#title{color:#2563eb;}#btn{padding:10px 18px;border:none;background:#111;color:#fff;cursor:pointer;border-radius:6px;}#btn:hover{background:#333;}");

    const [jsCode, setJsCode] = useState('document.getElementById("btn").addEventListener("click",()=>{document.getElementById("title").innerText="Button Clicked!";});');

    const [htmlPreview, setHtmlPreview] = useState("");

    const [leftWidth, setLeftWidth] = useState(55); // % screen size
    const isResizing = useRef(false);

    const startResize = () => {
        isResizing.current = true;
        document.body.style.cursor = "col-resize";
    };

    const stopResize = () => {
        isResizing.current = false;
        document.body.style.cursor = "default";
    };
    const resize = (e) => {
        if (!isResizing.current) return;

        const totalWidth = window.innerWidth;
        const newLeftWidth = (e.clientX / totalWidth) * 100;

        if (newLeftWidth > 30 && newLeftWidth < 80) {
            setLeftWidth(newLeftWidth);

            requestAnimationFrame(() => {
                editorRef.current?.layout();
            });
        }
    };


    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);

        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResize);
        };
    }, []);
    useEffect(() => {
        const root = document.documentElement;

        const updateTheme = () => {
            setTheme(root.classList.contains("dark") ? "hc-black" : "light");

        };

        updateTheme();

        const observer = new MutationObserver(updateTheme);
        observer.observe(root, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();
    }, []);

    const runCode = async (sourceCode = code) => {
        if (lang === "html") {
            const combined = `
    <!DOCTYPE html>
    <html>
    <head>
    <style>${cssCode}</style>
    </head>
    <body>
    ${htmlCode}
    <script>${jsCode}</script>
    </body>
    </html>`;
            setHtmlPreview(combined);
            setOutput("");
            return;
        }

        if (!sourceCode.trim()) {
            setOutput("⚠️ No code to execute");
            return;
        }

        setOutput("Running...");
        try {
            const result = await executeCode(
                sourceCode,
                languageMap[lang],
                input
            );

            if (result?.stderr) setOutput(result.stderr);
            else if (result?.compile_output) setOutput(result.compile_output);
            else setOutput(result?.stdout || "No output");
        } catch {
            setOutput("Execution failed");
        }
    };

    const resetEditor = () => {
        setCode("");
        setInput("");
        setOutput("");
        setHtmlPreview("");
        setHtmlCode("");
        setCssCode("");
        setJsCode("");
    };

    const downloadCode = () => {
        if (lang === "html") {
            const combined = `
<!DOCTYPE html>
<html>
<head>
<style>${cssCode}</style>
</head>
<body>
${htmlCode}
<script>${jsCode}</script>
</body>
</html>`;
            const blob = new Blob([combined], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "index.html";
            a.click();
            URL.revokeObjectURL(url);
            return;
        }

        if (!code) return;
        const blob = new Blob([code], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `code.${lang}`;
        a.click();
        URL.revokeObjectURL(url);
    };


    const editorRef = useRef(null);

    const [menu, setMenu] = useState({
        show: false,
        x: 0,
        y: 0
    });

    const onRightClick = (e) => {
        e.preventDefault();
        setMenu({ show: true, x: e.clientX, y: e.clientY });
    };

    const closeMenu = () => {
        setMenu(m => ({ ...m, show: false }));
    };

    const cutCode = async () => {
        const editor = editorRef.current;
        const text = editor.getModel().getValueInRange(editor.getSelection());
        await navigator.clipboard.writeText(text);
        editor.executeEdits("", [{ range: editor.getSelection(), text: "" }]);
        closeMenu();
    };

    const copyCode = async () => {
        const editor = editorRef.current;
        const text = editor.getModel().getValueInRange(editor.getSelection());
        await navigator.clipboard.writeText(text);
        closeMenu();
    };

    const copyAll = async () => {
        await navigator.clipboard.writeText(editorRef.current.getValue());
        closeMenu();
    };

    const pasteCode = async () => {
        const text = await navigator.clipboard.readText();
        editorRef.current.executeEdits("", [
            { range: editorRef.current.getSelection(), text }
        ]);
        closeMenu();
    };

    const selectAll = () => {
        editorRef.current.trigger("keyboard", "editor.action.selectAll");
        closeMenu();
    };

    const formatDocument = () => {
        editorRef.current
            .getAction("editor.action.formatDocument")
            .run();
        closeMenu();
    };

    const runFromMenu = () => {
        runCode(editorRef.current.getValue());
        closeMenu();
    };

    return (
        <div className="editor-root">
            <EditorHeader
                language={selected?.name || "Editor"}
                onRun={() => runCode()}
                onReset={resetEditor}
                onDownload={downloadCode}
            />

            <div className="editor-body">
                {/* LEFT */}
                <div
                    className="editor-left"
                    style={{ width: `${leftWidth}%` }}
                    onContextMenu={onRightClick}
                    onClick={closeMenu}
                >
                    {lang === "html" && (
                        <div className="editor-tabs">
                            {["html", "css", "js"].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`editor-tab ${activeTab === tab ? "active" : ""
                                        }`}
                                >
                                    {tab.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    )}

                    <MonacoEditor
                        language={
                            lang === "html"
                                ? activeTab === "js"
                                    ? "javascript"
                                    : activeTab === "css"
                                        ? "css"
                                        : "html"
                                : lang === "js"
                                    ? "javascript"
                                    : lang === "groovy"
                                        ? "java"
                                        : lang === "objectivec"
                                            ? "cpp"
                                            : lang === "assembly"
                                                ? "shell"
                                                : lang === "d"
                                                    ? "shell"
                                                    : lang === "bash"
                                                        ? "shell"
                                                        : lang
                        }
                        theme={theme}

                        value={
                            lang === "html"
                                ? activeTab === "html"
                                    ? htmlCode
                                    : activeTab === "css"
                                        ? cssCode
                                        : jsCode
                                : code
                        }

                        onChange={(v) => {
                            if (lang === "html") {
                                if (activeTab === "html") setHtmlCode(v || "");
                                if (activeTab === "css") setCssCode(v || "");
                                if (activeTab === "js") setJsCode(v || "");
                            } else {
                                setCode(v || "");
                            }
                        }}
                        options={{
                            contextmenu: false,
                            automaticLayout: true,
                            fontSize: 15,
                            fontFamily: "Fira Code, monospace",
                            fontLigatures: true,
                            lineHeight: 20,
                            cursorBlinking: "smooth",
                            cursorSmoothCaretAnimation: "off",
                            cursorStyle: "line",
                            smoothScrolling: false,
                            lineNumbers: "on",
                            revealOnScroll: false,
                            padding: { top: 8, bottom: 8 },

                            lineNumbersMinChars: 3,
                            minimap: { enabled: false },
                            scrollbar: {
                                vertical: "hidden",
                                horizontal: "hidden",
                                verticalScrollbarSize: 0,
                                horizontalScrollbarSize: 0,
                                useShadows: false,
                                verticalHasArrows: false,
                                horizontalHasArrows: false,
                                alwaysConsumeMouseWheel: false,
                            },
                            wordWrap: "on",
                            roundedSelection: true,
                            renderLineHighlight: "none",
                            renderLineHighlightOnlyWhenFocus: true,
                            scrollBeyondLastLine: false,
                            matchBrackets: "always",
                            autoClosingBrackets: "always",
                            autoClosingQuotes: "always",
                            formatOnPaste: true,
                            formatOnType: true,

                            selectionHighlight: false,
                            occurrencesHighlight: false,
                            quickSuggestions: true,
                            suggestFontSize: 13,
                            suggestLineHeight: 24,

                            guides: {
                                indentation: false,
                                highlightActiveIndentation: false,
                            },

                        }}
                        onMount={(editor) => {
                            editorRef.current = editor;
                        }}
                    />
                </div>

                {/* RESIZER */}
                <div
                    className="editor-resizer"
                    onMouseDown={startResize}
                />
                {/* RIGHT */}
                <div
                    className="editor-right"
                    style={{ width: `${100 - leftWidth}%` }}
                >
                    {lang !== "html" && <InputPanel input={input} setInput={setInput} />}
                    <OutputPanel
                        output={output}
                        lang={lang}
                        htmlPreview={htmlPreview}
                    />
                </div>

                {menu.show && (
                    <div
                        style={{
                            position: "fixed",
                            top: menu.y,
                            left: menu.x,
                            background: "var(--panel-bg)",
                            color: "var(--text-color)",
                            borderRadius: "8px",
                            padding: "6px 0",
                            zIndex: 9999,
                            minWidth: "190px",
                            border: "1px solid var(--border-color)",
                            boxShadow:
                                "0 8px 24px rgba(0,0,0,.18), 0 2px 6px rgba(0,0,0,.12)",
                            fontSize: "14px"
                        }}
                    >
                        {[
                            ["Cut", cutCode],
                            ["Copy", copyCode],
                            ["Copy All", copyAll],
                            ["Paste", pasteCode],
                            ["Select All", selectAll],
                            ["divider"],
                            ["Format Document", formatDocument],
                            ["Run Code", runFromMenu],
                        ].map((item, i) =>
                            item[0] === "divider" ? (
                                <div
                                    key={i}
                                    style={{
                                        height: "1px",
                                        margin: "6px 0",
                                        background: "var(--border-color)"
                                    }}
                                />
                            ) : (
                                <div
                                    key={item[0]}
                                    onClick={item[1]}
                                    style={{
                                        padding: "8px 16px",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        fontWeight:
                                            item[0] === "Run Code" ? 600 : 400
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = "var(--tab-bg)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "transparent";
                                    }}
                                >
                                    {item[0]}
                                </div>
                            )
                        )}
                    </div>
                )}

            </div>
        </div>

    );
}
