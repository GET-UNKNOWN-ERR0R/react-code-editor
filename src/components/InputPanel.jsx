import "./InputPanel.css";

export default function InputPanel({ input, setInput, dark }) {
    return (
        <div className={`input-panel ${dark ? "dark" : ""}`}>
            <h3 className="input-title">Input</h3>

            <textarea
                className="input-textarea"
                placeholder="Enter input here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}
