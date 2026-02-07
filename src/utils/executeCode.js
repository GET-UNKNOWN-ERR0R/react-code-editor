export async function executeCode(sourceCode, languageId, stdin = "") {
    const response = await fetch(
        "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source_code: sourceCode,
                language_id: languageId,
                stdin
            })
        }
    );

    return await response.json();
}
