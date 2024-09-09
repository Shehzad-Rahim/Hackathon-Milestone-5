"use strict";
var _a, _b, _c, _d, _e, _f, _g;
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const skillsInput = document.getElementById("skills");
    const experienceInput = document.getElementById("experience");
    const educationInput = document.getElementById("education");
    const summaryInput = document.getElementById("summary");
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
    if (name && email && phone && skills && experience && education && summary) {
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
(_b = document.getElementById("editButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    const outputName = document.getElementById("outputName");
    const outputEmail = document.getElementById("outputEmail");
    const outputPhone = document.getElementById("outputPhone");
    const outputSkills = document.getElementById("outputSkills");
    const outputExperience = document.getElementById("outputExperience");
    const outputEducation = document.getElementById("outputEducation");
    const outputSummary = document.getElementById("outputSummary");
    outputName.contentEditable = "true";
    outputEmail.contentEditable = "true";
    outputPhone.contentEditable = "true";
    outputSkills.contentEditable = "true";
    outputExperience.contentEditable = "true";
    outputEducation.contentEditable = "true";
    outputSummary.contentEditable = "true";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("updateButton").style.display = "inline-block";
});
(_c = document.getElementById("updateButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    const outputName = document.getElementById("outputName");
    const outputEmail = document.getElementById("outputEmail");
    const outputPhone = document.getElementById("outputPhone");
    const outputSkills = document.getElementById("outputSkills");
    const outputExperience = document.getElementById("outputExperience");
    const outputEducation = document.getElementById("outputEducation");
    const outputSummary = document.getElementById("outputSummary");
    outputName.contentEditable = "false";
    outputEmail.contentEditable = "false";
    outputPhone.contentEditable = "false";
    outputSkills.contentEditable = "false";
    outputExperience.contentEditable = "false";
    outputEducation.contentEditable = "false";
    outputSummary.contentEditable = "false";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
    alert("Your changes have been updated!");
});
(_d = document.getElementById("generateLink")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    const name = document.getElementById("outputName").textContent;
    const email = document.getElementById("outputEmail").textContent;
    const phone = document.getElementById("outputPhone").textContent;
    const skills = document.getElementById("outputSkills").textContent;
    const experience = document.getElementById("outputExperience").textContent;
    const education = document.getElementById("outputEducation").textContent;
    const summary = document.getElementById("outputSummary").textContent;
    const baseUrl = window.location.href.split('?')[0];
    const link = `${baseUrl}?name=${encodeURIComponent(name !== null && name !== void 0 ? name : '')}&email=${encodeURIComponent(email !== null && email !== void 0 ? email : '')}&phone=${encodeURIComponent(phone !== null && phone !== void 0 ? phone : '')}&skills=${encodeURIComponent(skills !== null && skills !== void 0 ? skills : '')}&experience=${encodeURIComponent(experience !== null && experience !== void 0 ? experience : '')}&education=${encodeURIComponent(education !== null && education !== void 0 ? education : '')}&summary=${encodeURIComponent(summary !== null && summary !== void 0 ? summary : '')}`;
    // Display the generated link
    const generatedLinkElement = document.getElementById("generatedLink");
    generatedLinkElement.textContent = link;
});
(_e = document.getElementById("printPDF")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    window.print();
});
// Generate a sharable link with the resume content
(_f = document.getElementById("generateLink")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    const name = document.getElementById("outputName").textContent;
    const email = document.getElementById("outputEmail").textContent;
    const phone = document.getElementById("outputPhone").textContent;
    const skills = document.getElementById("outputSkills").textContent;
    const experience = document.getElementById("outputExperience").textContent;
    const education = document.getElementById("outputEducation").textContent;
    const summary = document.getElementById("outputSummary").textContent;
    // Create a URL with query parameters
    const baseUrl = window.location.href.split('?')[0]; // Get base URL without query parameters
    const link = `${baseUrl}?name=${encodeURIComponent(name !== null && name !== void 0 ? name : '')}&email=${encodeURIComponent(email !== null && email !== void 0 ? email : '')}&phone=${encodeURIComponent(phone !== null && phone !== void 0 ? phone : '')}&skills=${encodeURIComponent(skills !== null && skills !== void 0 ? skills : '')}&experience=${encodeURIComponent(experience !== null && experience !== void 0 ? experience : '')}&education=${encodeURIComponent(education !== null && education !== void 0 ? education : '')}&summary=${encodeURIComponent(summary !== null && summary !== void 0 ? summary : '')}`;
    // Display the generated link
    const generatedLinkElement = document.getElementById("generatedLink");
    generatedLinkElement.textContent = link;
    // Show the "Copy Link" button after generating the link
    const copyLinkButton = document.getElementById("copyLink");
    copyLinkButton.style.display = "inline-block"; // Make the button visible
});
// Copy the generated link to clipboard
(_g = document.getElementById("copyLink")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () {
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
