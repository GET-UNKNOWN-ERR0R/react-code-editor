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

    const [htmlCode, setHtmlCode] = useState("<h1>Hello HTML</h1>");
    const [cssCode, setCssCode] = useState(
        "body { font-family: Arial; background: #f5f5f5; }"
    );
    const [jsCode, setJsCode] = useState("console.log('Hello JS');");

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
                                    ? "javascript"   // ✅ FIX
                                    : activeTab
                                : lang === "js"
                                    ? "javascript"
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
                            } else setCode(v || "");
                        }}
                        options={{
                            automaticLayout: true,
                            fontSize: 15,
                            fontFamily: "Fira Code, monospace",
                            fontLigatures: true,
                            lineHeight: 20,
                            cursorBlinking: "smooth",
                            cursorSmoothCaretAnimation: "on",
                            cursorStyle: "line",
                            padding: { top: 12, bottom: 12 },
                            smoothScrolling: true,
                            lineNumbers: "on",
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
                            renderLineHighlightOnlyWhenFocus: false,
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
                        }}
                        onMount={(editor, monaco) => {
                            editor.addCommand(
                                monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
                                () => runCode(editor.getValue())
                            );

                            editor.addAction({
                                id: "run-code",
                                label: "▶ Run Code",
                                run: () => runCode(editor.getValue())
                            });

                            editor.addAction({
                                id: "reset-editor",
                                label: "♻ Reset Editor",
                                run: resetEditor
                            });

                            editor.addAction({
                                id: "copy-all-code",
                                label: "📋 Copy All Code",
                                run: async () => {
                                    await navigator.clipboard.writeText(editor.getValue());
                                }
                            });
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

            </div>
        </div>
    );
}
