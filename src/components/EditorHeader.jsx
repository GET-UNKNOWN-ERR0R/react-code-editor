import "./EditorHeader.css";

export default function EditorHeader({
    language,
    onRun,
    onReset,
    onDownload
}) {
    return (
        <div className="editor-header">
            <h2 id="title-header" className="editor-title">{language} Editor</h2>

            <div className="editor-actions">
                <button onClick={onRun} className="btn btn-run">
                    Run
                </button>

                <button onClick={onReset} className="btn btn-reset">
                    Reset
                </button>

                <button onClick={onDownload} className="btn btn-download">
                    Download
                </button>
            </div>
        </div>
    );
}
