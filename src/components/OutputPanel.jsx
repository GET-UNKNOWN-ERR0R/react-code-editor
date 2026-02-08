import "./OutputPanel.css";

export default function OutputPanel({ output, lang, htmlPreview, dark }) {
    return (
        <div className={`output-panel ${dark ? "dark" : ""}`}>
            <h3 className="output-title">Output</h3>

            {lang === "html" ? (
                <iframe
                    srcDoc={htmlPreview}
                    sandbox="allow-scripts allow-modals"
                    className="output-iframe"
                    style={{ overflow: "hidden" }}
                />
            ) : (
                <pre className="output-pre">
                    {output}
                </pre>
            )}
        </div>
    );
}

