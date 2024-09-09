document.getElementById("generate")?.addEventListener("click", function () {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
  const educationInput = document.getElementById("education") as HTMLTextAreaElement;
  const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const skills = skillsInput.value;
  const experience = experienceInput.value;
  const education = educationInput.value;
  const summary = summaryInput.value;

  if (name && email && phone && skills && experience && education && summary) {
      (document.getElementById("outputName") as HTMLParagraphElement).textContent = `Name: ${name}`;
      (document.getElementById("outputEmail") as HTMLParagraphElement).textContent = `Email: ${email}`;
      (document.getElementById("outputPhone") as HTMLParagraphElement).textContent = `Phone: ${phone}`;
      (document.getElementById("outputSkills") as HTMLParagraphElement).textContent = `Skills: ${skills}`;
      (document.getElementById("outputExperience") as HTMLParagraphElement).textContent = `Experience: ${experience}`;
      (document.getElementById("outputEducation") as HTMLParagraphElement).textContent = `Education: ${education}`;
      (document.getElementById("outputSummary") as HTMLParagraphElement).textContent = `Summary: ${summary}`;

      (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "block";
  } else {
      alert("Please fill out all fields!");
  }
});


document.getElementById("editButton")?.addEventListener("click", function () {
  const outputName = document.getElementById("outputName") as HTMLElement;
  const outputEmail = document.getElementById("outputEmail") as HTMLElement;
  const outputPhone = document.getElementById("outputPhone") as HTMLElement;
  const outputSkills = document.getElementById("outputSkills") as HTMLElement;
  const outputExperience = document.getElementById("outputExperience") as HTMLElement;
  const outputEducation = document.getElementById("outputEducation") as HTMLElement;
  const outputSummary = document.getElementById("outputSummary") as HTMLElement;

  
  outputName.contentEditable = "true";
  outputEmail.contentEditable = "true";
  outputPhone.contentEditable = "true";
  outputSkills.contentEditable = "true";
  outputExperience.contentEditable = "true";
  outputEducation.contentEditable = "true";
  outputSummary.contentEditable = "true";

 
  (document.getElementById("editButton") as HTMLButtonElement).style.display = "none";
  (document.getElementById("updateButton") as HTMLButtonElement).style.display = "inline-block";
});



document.getElementById("updateButton")?.addEventListener("click", function () {
  const outputName = document.getElementById("outputName") as HTMLElement;
  const outputEmail = document.getElementById("outputEmail") as HTMLElement;
  const outputPhone = document.getElementById("outputPhone") as HTMLElement;
  const outputSkills = document.getElementById("outputSkills") as HTMLElement;
  const outputExperience = document.getElementById("outputExperience") as HTMLElement;
  const outputEducation = document.getElementById("outputEducation") as HTMLElement;
  const outputSummary = document.getElementById("outputSummary") as HTMLElement;

 
  outputName.contentEditable = "false";
  outputEmail.contentEditable = "false";
  outputPhone.contentEditable = "false";
  outputSkills.contentEditable = "false";
  outputExperience.contentEditable = "false";
  outputEducation.contentEditable = "false";
  outputSummary.contentEditable = "false";

  
  (document.getElementById("editButton") as HTMLButtonElement).style.display = "inline-block";
  (document.getElementById("updateButton") as HTMLButtonElement).style.display = "none";

 
  alert("Your changes have been updated!");
});



document.getElementById("generateLink")?.addEventListener("click", function () {
  const name = (document.getElementById("outputName") as HTMLElement).textContent;
  const email = (document.getElementById("outputEmail") as HTMLElement).textContent;
  const phone = (document.getElementById("outputPhone") as HTMLElement).textContent;
  const skills = (document.getElementById("outputSkills") as HTMLElement).textContent;
  const experience = (document.getElementById("outputExperience") as HTMLElement).textContent;
  const education = (document.getElementById("outputEducation") as HTMLElement).textContent;
  const summary = (document.getElementById("outputSummary") as HTMLElement).textContent;

 
  const baseUrl = window.location.href.split('?')[0];  
  const link = `${baseUrl}?name=${encodeURIComponent(name ?? '')}&email=${encodeURIComponent(email ?? '')}&phone=${encodeURIComponent(phone ?? '')}&skills=${encodeURIComponent(skills ?? '')}&experience=${encodeURIComponent(experience ?? '')}&education=${encodeURIComponent(education ?? '')}&summary=${encodeURIComponent(summary ?? '')}`;

  // Display the generated link
  const generatedLinkElement = document.getElementById("generatedLink") as HTMLElement;
  generatedLinkElement.textContent = link;
});


document.getElementById("printPDF")?.addEventListener("click", function () {
  window.print();  
});


// Generate a sharable link with the resume content
document.getElementById("generateLink")?.addEventListener("click", function () {
  const name = (document.getElementById("outputName") as HTMLElement).textContent;
  const email = (document.getElementById("outputEmail") as HTMLElement).textContent;
  const phone = (document.getElementById("outputPhone") as HTMLElement).textContent;
  const skills = (document.getElementById("outputSkills") as HTMLElement).textContent;
  const experience = (document.getElementById("outputExperience") as HTMLElement).textContent;
  const education = (document.getElementById("outputEducation") as HTMLElement).textContent;
  const summary = (document.getElementById("outputSummary") as HTMLElement).textContent;

  // Create a URL with query parameters
  const baseUrl = window.location.href.split('?')[0];  // Get base URL without query parameters
  const link = `${baseUrl}?name=${encodeURIComponent(name ?? '')}&email=${encodeURIComponent(email ?? '')}&phone=${encodeURIComponent(phone ?? '')}&skills=${encodeURIComponent(skills ?? '')}&experience=${encodeURIComponent(experience ?? '')}&education=${encodeURIComponent(education ?? '')}&summary=${encodeURIComponent(summary ?? '')}`;

  // Display the generated link
  const generatedLinkElement = document.getElementById("generatedLink") as HTMLElement;
  generatedLinkElement.textContent = link;

  // Show the "Copy Link" button after generating the link
  const copyLinkButton = document.getElementById("copyLink") as HTMLElement;
  copyLinkButton.style.display = "inline-block";  // Make the button visible
});

// Copy the generated link to clipboard
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
