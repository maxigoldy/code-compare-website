function compareTexts() {
    const text1 = document.getElementById("text1").value.split("\n");
    const text2 = document.getElementById("text2").value.split("\n");

    let resultHTML1 = "";
    let resultHTML2 = "";
    let maxLength = Math.max(text1.length, text2.length);

    for (let i = 0; i < maxLength; i++) {
        if (text1[i] === text2[i]) {
            resultHTML1 += text1[i] + "\n";
            resultHTML2 += text2[i] + "\n";
        } else if (text1[i] === undefined) {
            resultHTML2 += `<span class="added">+ ${text2[i]}</span>\n`;
        } else if (text2[i] === undefined) {
            resultHTML1 += `<span class="removed">- ${text1[i]}</span>\n`;
        } else {
            resultHTML1 += `<span class="removed">- ${text1[i]}</span>\n`;
            resultHTML2 += `<span class="added
