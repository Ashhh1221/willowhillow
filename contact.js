// Replace this with the email address where you want to receive inquiries.
const CONTACT_EMAIL = "";

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  if (!CONTACT_EMAIL) {
    status.textContent =
      "This form is a preview. Add your contact email in contact.js to enable sending.";
    return;
  }

  const data = new FormData(form);
  const subject = `Willowfellow inquiry: ${data.get("project")}`;

  const body =
    `Hello Willowfellow,\n\n` +
    `My name is ${data.get("name")}.\n` +
    `My email is ${data.get("email")}.\n` +
    `Project: ${data.get("project")}\n\n` +
    `${data.get("message")}`;

  const mailto =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  status.textContent = "Your email app should open with the message ready to send.";
  window.location.href = mailto;
});