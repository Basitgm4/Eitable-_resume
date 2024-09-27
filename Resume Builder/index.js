function generateResume() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const resumeOutput = `
        <h2>${name}</h2>
        <h3>${title}</h3>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    document.getElementById('resume-output').innerHTML = resumeOutput;
}
