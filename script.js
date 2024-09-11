"use strict";
var _a, _b, _c, _d, _e, _f;
// Generate resume and display
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const summary = document.getElementById("summary").value;
    if (name && email && phone && skills && experience && education && summary) {
        document.getElementById("resumeTitle").textContent = `${name}'s Resume`;
        document.getElementById("outputName").textContent = `Name: ${name}`;
        document.getElementById("outputEmail").textContent = `Email: ${email}`;
        document.getElementById("outputPhone").textContent = `Phone: ${phone}`;
        document.getElementById("outputSkills").textContent = `Skills: ${skills}`;
        document.getElementById("outputExperience").textContent = `Experience: ${experience}`;
        document.getElementById("outputEducation").textContent = `Education: ${education}`;
        document.getElementById("outputSummary").textContent = `Summary: ${summary}`;
        document.getElementById("resumeContainer").style.display = "block";
    }
    else {
        alert("Please fill out all fields!");
    }
});
// Enable resume editing
(_b = document.getElementById("editButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    const outputElements = document.querySelectorAll(".resume-content p");
    outputElements.forEach((element) => {
        element.contentEditable = "true";
    });
    // Show update button and hide edit button
    document.getElementById("editButton").style.display = "none";
    document.getElementById("updateButton").style.display = "inline-block";
});
// Disable resume editing and update content
(_c = document.getElementById("updateButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    const outputElements = document.querySelectorAll(".resume-content p");
    outputElements.forEach((element) => {
        element.contentEditable = "false";
    });
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
    alert("Your changes have been saved!");
});
//generated link to clipboard
(_d = document.getElementById("copyLink")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    const generatedLinkElement = document.getElementById("generatedLink");
    const link = generatedLinkElement.textContent;
    if (link) {
        navigator.clipboard.writeText(link).then(() => {
            alert("Link copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy the link.");
        });
    }
});
// Print resume as PDF without buttons or links
(_e = document.getElementById("printPDF")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    const resumeContent = document.getElementById("resumeContainer");
    const originalContent = document.body.innerHTML;
    // Hide buttons during print
    const buttons = document.querySelectorAll("button, #generatedLink, #copyLink, #resumeTitle");
    buttons.forEach((button) => button.style.display = "none");
    const style = document.createElement("style");
    style.innerHTML = `
    body {
        background-color: black;
        color: gold;
        font-family: Arial, Helvetica, sans-serif;
        padding: 20px;
        max-width: 60%;
        margin: 20px auto;
    }
    .resume-content {
        background-color: black;
        padding: 20px 30px;
        border-radius: 8px;
        box-shadow: 2px 0px 10px 7px gold;
    }
    .resume-content h1{
        text-align: center;
    }
    .resume-content p {
        margin-bottom: 10px;
        border-bottom: 1px solid gold;
        font-size: 18px;
        font-style: italic;
    }
  `;
    document.head.appendChild(style);
    // Print only the resume
    const resumeHtml = resumeContent.innerHTML;
    document.body.innerHTML = resumeHtml;
    window.print();
    // Restore original content and buttons
    document.body.innerHTML = originalContent;
    buttons.forEach((button) => button.style.display = "inline-block");
});
//Shortned url
const link = "https://shorturl.at/yJhqH";
(_f = document.getElementById("generateLink")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    // Display the generated link
    const generatedLinkElement = document.getElementById("generatedLink");
    generatedLinkElement.textContent = link;
    // Show the "Copy Link" button after generating the link
    const copyLinkButton = document.getElementById("copyLink");
    copyLinkButton.style.display = "inline-block";
});
