// Generate resume and display
document.getElementById("generate")?.addEventListener("click", function () {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
 

  if (name && email && phone && skills && experience && education && summary) {
    (document.getElementById("outputName") as HTMLElement).textContent = `Name: ${name}`;
    (document.getElementById("outputEmail") as HTMLElement).textContent = `Email: ${email}`;
    (document.getElementById("outputPhone") as HTMLElement).textContent = `Phone: ${phone}`;
    (document.getElementById("outputSkills") as HTMLElement).textContent = `Skills: ${skills}`;
    (document.getElementById("outputExperience") as HTMLElement).textContent = `Experience: ${experience}`;
    (document.getElementById("outputEducation") as HTMLElement).textContent = `Education: ${education}`;
    (document.getElementById("outputSummary") as HTMLElement).textContent = `Summary: ${summary}`;
    (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "block";
  } else {
    alert("Please fill out all fields!");
  }
});

// Enable resume editing
document.getElementById("editButton")?.addEventListener("click", function () {
  const outputElements = document.querySelectorAll(".resume-content p");

  outputElements.forEach((element) => {
    (element as HTMLElement).contentEditable = "true";
  });

  // Show update button and hide edit button
  (document.getElementById("editButton") as HTMLButtonElement).style.display = "none";
  (document.getElementById("updateButton") as HTMLButtonElement).style.display = "inline-block";
});

// Disable resume editing and update content
document.getElementById("updateButton")?.addEventListener("click", function () {
  const outputElements = document.querySelectorAll(".resume-content p");

  outputElements.forEach((element) => {
    (element as HTMLElement).contentEditable = "false";
  });

  // Show edit button and hide update button
  (document.getElementById("editButton") as HTMLButtonElement).style.display = "inline-block";
  (document.getElementById("updateButton") as HTMLButtonElement).style.display = "none";

  alert("Your changes have been saved!");
});

//Sharable link with the resume content
// document.getElementById("generateLink")?.addEventListener("click", function () {
//   const name = (document.getElementById("outputName") as HTMLElement).textContent;
//   const email = (document.getElementById("outputEmail") as HTMLElement).textContent;
//   const phone = (document.getElementById("outputPhone") as HTMLElement).textContent;
//   const skills = (document.getElementById("outputSkills") as HTMLElement).textContent;
//   const experience = (document.getElementById("outputExperience") as HTMLElement).textContent;
//   const education = (document.getElementById("outputEducation") as HTMLElement).textContent;
//   const summary = (document.getElementById("outputSummary") as HTMLElement).textContent;

//   const baseUrl = window.location.href.split('?')[0];
//   const link = `${baseUrl}?name=${encodeURIComponent(name ?? '')}&email=${encodeURIComponent(email ?? '')}&phone=${encodeURIComponent(phone ?? '')}&skills=${encodeURIComponent(skills ?? '')}&experience=${encodeURIComponent(experience ?? '')}&education=${encodeURIComponent(education ?? '')}&summary=${encodeURIComponent(summary ?? '')}`;

//   //Generated link
//   const generatedLinkElement = document.getElementById("generatedLink") as HTMLElement;
//   generatedLinkElement.textContent = link;

//   //Copy Link button after generating the link
//   (document.getElementById("copyLink") as HTMLElement).style.display = "inline-block";
// });

//generated link to clipboard
document.getElementById("copyLink")?.addEventListener("click", function () {
  const generatedLinkElement = document.getElementById("generatedLink") as HTMLElement;
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
document.getElementById("printPDF")?.addEventListener("click", function () {
  const resumeContent = document.getElementById("resumeContainer") as HTMLElement;
  const originalContent = document.body.innerHTML;


  // Hide buttons during print
  const buttons: any = document.querySelectorAll("button, #generatedLink, #copyLink, #resumeTitle");
  buttons.forEach(button => button.style.display = "none");

  
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
  buttons.forEach(button => button.style.display = "inline-block");
});



document.getElementById("generateLink")?.addEventListener("click", function () {
  const name = (document.getElementById("outputName") as HTMLElement).textContent;
  const email = (document.getElementById("outputEmail") as HTMLElement).textContent;
  const phone = (document.getElementById("outputPhone") as HTMLElement).textContent;
  const skills = (document.getElementById("outputSkills") as HTMLElement).textContent;
  const experience = (document.getElementById("outputExperience") as HTMLElement).textContent;
  const education = (document.getElementById("outputEducation") as HTMLElement).textContent;
  const summary = (document.getElementById("outputSummary") as HTMLElement).textContent;

  // Create a URL with query parameters
  const baseUrl = window.location.origin + '/resumePreview.html';
  const link = `${baseUrl}?name=${encodeURIComponent(name ?? '')}&email=${encodeURIComponent(email ?? '')}&phone=${encodeURIComponent(phone ?? '')}&skills=${encodeURIComponent(skills ?? '')}&experience=${encodeURIComponent(experience ?? '')}&education=${encodeURIComponent(education ?? '')}&summary=${encodeURIComponent(summary ?? '')}`;

  // Display the generated link
  const generatedLinkElement = document.getElementById("generatedLink") as HTMLElement;
  generatedLinkElement.textContent = link;

  // Show the "Copy Link" button after generating the link
  const copyLinkButton = document.getElementById("copyLink") as HTMLElement;
  copyLinkButton.style.display = "inline-block";  // Make the button visible
});
