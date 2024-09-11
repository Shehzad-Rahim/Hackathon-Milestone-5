var _a, _b, _c, _d, _e, _f;
// Generate resume and display
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var summary = document.getElementById("summary").value;
    if (name && email && phone && skills && experience && education && summary) {
        document.getElementById("outputName").textContent = "Name: ".concat(name);
        document.getElementById("outputEmail").textContent = "Email: ".concat(email);
        document.getElementById("outputPhone").textContent = "Phone: ".concat(phone);
        document.getElementById("outputSkills").textContent = "Skills: ".concat(skills);
        document.getElementById("outputExperience").textContent = "Experience: ".concat(experience);
        document.getElementById("outputEducation").textContent = "Education: ".concat(education);
        document.getElementById("outputSummary").textContent = "Summary: ".concat(summary);
        document.getElementById("resumeContainer").style.display = "block";
    }
    else {
        alert("Please fill out all fields!");
    }
});
// Enable resume editing
(_b = document.getElementById("editButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var outputElements = document.querySelectorAll(".resume-content p");
    outputElements.forEach(function (element) {
        element.contentEditable = "true";
    });
    // Show update button and hide edit button
    document.getElementById("editButton").style.display = "none";
    document.getElementById("updateButton").style.display = "inline-block";
});
// Disable resume editing and update content
(_c = document.getElementById("updateButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var outputElements = document.querySelectorAll(".resume-content p");
    outputElements.forEach(function (element) {
        element.contentEditable = "false";
    });
    // Show edit button and hide update button
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
    alert("Your changes have been saved!");
});

//generated link to clipboard
(_d = document.getElementById("copyLink")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var generatedLinkElement = document.getElementById("generatedLink");
    var link = generatedLinkElement.textContent;
    if (link) {
        navigator.clipboard.writeText(link).then(function () {
            alert("Link copied to clipboard!");
        }).catch(function () {
            alert("Failed to copy the link.");
        });
    }
});
// Print resume as PDF without buttons or links
(_e = document.getElementById("printPDF")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    var resumeContent = document.getElementById("resumeContainer");
    var originalContent = document.body.innerHTML;
    // Hide buttons during print
    var buttons = document.querySelectorAll("button, #generatedLink, #copyLink, #resumeTitle");
    buttons.forEach(function (button) { return button.style.display = "none"; });
    var style = document.createElement("style");
    style.innerHTML = "\n    body {\n        background-color: black;\n        color: gold;\n        font-family: Arial, Helvetica, sans-serif;\n        padding: 20px;\n        max-width: 60%;\n        margin: 20px auto;\n    }\n    .resume-content {\n        background-color: black;\n        padding: 20px 30px;\n        border-radius: 8px;\n        box-shadow: 2px 0px 10px 7px gold;\n    }\n    .resume-content h1{\n        text-align: center;\n    }\n    .resume-content p {\n        margin-bottom: 10px;\n        border-bottom: 1px solid gold;\n        font-size: 18px;\n        font-style: italic;\n    }\n  ";
    document.head.appendChild(style);
    // Print only the resume
    var resumeHtml = resumeContent.innerHTML;
    document.body.innerHTML = resumeHtml;
    window.print();
    // Restore original content and buttons
    document.body.innerHTML = originalContent;
    buttons.forEach(function (button) { return button.style.display = "inline-block"; });
});
(_f = document.getElementById("generateLink")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    var name = document.getElementById("outputName").textContent;
    var email = document.getElementById("outputEmail").textContent;
    var phone = document.getElementById("outputPhone").textContent;
    var skills = document.getElementById("outputSkills").textContent;
    var experience = document.getElementById("outputExperience").textContent;
    var education = document.getElementById("outputEducation").textContent;
    var summary = document.getElementById("outputSummary").textContent;
    // Create a URL with query parameters
    var baseUrl = window.location.origin + '/resumePreview.html';
    var link = "".concat(baseUrl, "?name=").concat(encodeURIComponent(name !== null && name !== void 0 ? name : ''), "&email=").concat(encodeURIComponent(email !== null && email !== void 0 ? email : ''), "&phone=").concat(encodeURIComponent(phone !== null && phone !== void 0 ? phone : ''), "&skills=").concat(encodeURIComponent(skills !== null && skills !== void 0 ? skills : ''), "&experience=").concat(encodeURIComponent(experience !== null && experience !== void 0 ? experience : ''), "&education=").concat(encodeURIComponent(education !== null && education !== void 0 ? education : ''), "&summary=").concat(encodeURIComponent(summary !== null && summary !== void 0 ? summary : ''));
    // Display the generated link
    var generatedLinkElement = document.getElementById("generatedLink");
    generatedLinkElement.textContent = link;
    // Show the "Copy Link" button after generating the link
    var copyLinkButton = document.getElementById("copyLink");
    copyLinkButton.style.display = "inline-block"; // Make the button visible
});
