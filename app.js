const passwordState = document.querySelector("#password-state");
const form = document.querySelector(".FormContainer");
const toggleButtons = document.querySelectorAll("[data-pw-toggle]");

//
// Functions
//

function handleClick(event) {
  if (!event.target.matches("[data-pw-toggle]")) return;

  // Loop through buttons and make toggle password button switch work
  for (const toggleButton of toggleButtons) {
    if (toggleButton.matches('[aria-pressed="false"')) {
      toggleButton.setAttribute("aria-pressed", true);
    } else {
      toggleButton.setAttribute("aria-pressed", false);
    }
  }

  // Get the password fields
  const selectors = event.target.getAttribute("data-pw-toggle");
  const passwords = document.querySelectorAll(selectors);

  // Loop through each password field
  for (const password of passwords) {
    // If the toggle is pressed, change the type to "text"
    // Otherwise, change it back to "password"
    // Also, set message for screen readers
    if (event.target.matches('[aria-pressed="true"]')) {
      password.type = "text";
      passwordState.innerHTML = "Password visible";
    } else {
      password.type = "password";
      passwordState.innerHTML = "Password hidden";
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
}

//
// Events
//
form.addEventListener("submit", handleSubmit);
form.addEventListener("click", handleClick);
