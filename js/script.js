const freeTrialFormFname = document.querySelector(".free-trial-form-fname");
const freeTrialFormLname = document.querySelector(".free-trial-form-lname");
const freeTrialFormEmail = document.querySelector(".free-trial-form-email");
const freeTrialFormPass = document.querySelector(".free-trial-form-pass");

const freeTrialFormFnameInput = document.querySelector(".free-trial-form-fname-input");
const freeTrialFormLnameInput = document.querySelector(".free-trial-form-lname-input");
const freeTrialFormEmailInput = document.querySelector(".free-trial-form-email-input");
const freeTrialFormPassInput = document.querySelector(".free-trial-form-pass-input");

const freeTrialFormButton = document.querySelector(".free-trial-form-btn");

freeTrialFormButton.addEventListener("click", function(event) {

  if (freeTrialFormFnameInput.value === "" && !document.querySelector(".free-trial-form-fname-icon")) {
    const iconError = document.createElement("img");
    freeTrialFormFname.appendChild(iconError);
    iconError.setAttribute("src", "images/icon-error.svg");
    iconError.setAttribute("class", "free-trial-form-icon free-trial-form-fname-icon");
    const para = document.createElement("p");
    const paraText = document.createTextNode("First Name cannot be empty");
    para.appendChild(paraText);
    freeTrialFormFname.appendChild(para);
    para.setAttribute("class", "free-trial-form-text free-trial-form-fname-text");
    freeTrialFormFnameInput.classList.add("error");
    freeTrialFormFnameInput.setAttribute("placeholder", "");
  } else if (freeTrialFormFnameInput.value !== "" && !!document.querySelector(".free-trial-form-fname-icon")) {
    const iconError = document.querySelector(".free-trial-form-fname-icon");
    iconError.remove();
    const para = document.querySelector(".free-trial-form-fname-text");
    para.remove();
    freeTrialFormFnameInput.classList.remove("error");
    freeTrialFormFnameInput.setAttribute("placeholder", "First Name");
  };

  if (freeTrialFormLnameInput.value === "" && !document.querySelector(".free-trial-form-lname-icon")) {
    const iconError = document.createElement("img");
    freeTrialFormLname.appendChild(iconError);
    iconError.setAttribute("src", "images/icon-error.svg");
    iconError.setAttribute("class", "free-trial-form-icon free-trial-form-lname-icon");
    const para = document.createElement("p");
    const paraText = document.createTextNode("Last Name cannot be empty");
    para.appendChild(paraText);
    freeTrialFormLname.appendChild(para);
    para.setAttribute("class", "free-trial-form-text free-trial-form-lname-text");
    freeTrialFormLnameInput.classList.add("error");
    freeTrialFormLnameInput.setAttribute("placeholder", "");
  } else if (freeTrialFormLnameInput.value !== "" && !!document.querySelector(".free-trial-form-lname-icon")) {
    const iconError = document.querySelector(".free-trial-form-lname-icon");
    iconError.remove();
    const para = document.querySelector(".free-trial-form-lname-text");
    para.remove();
    freeTrialFormLnameInput.classList.remove("error");
    freeTrialFormLnameInput.setAttribute("placeholder", "Last Name");
  };

  if (freeTrialFormEmailInput.value === "") {
    if (!document.querySelector(".free-trial-form-email-icon")) {
      const iconError = document.createElement("img");
      freeTrialFormEmail.appendChild(iconError);
      iconError.setAttribute("src", "images/icon-error.svg");
      iconError.setAttribute("class", "free-trial-form-icon free-trial-form-email-icon");
    };
    if (document.querySelector(".free-trial-form-email-text")) {
      if (document.querySelector(".free-trial-form-email-text").innerHTML !== "Email Address cannot be empty") {
        document.querySelector(".free-trial-form-email-text").innerHTML = "Email Address cannot be empty"
      };
    } else if (!document.querySelector(".free-trial-form-email-text")) {
      const para = document.createElement("p");
      const paraText = document.createTextNode("Email Address cannot be empty");
      para.appendChild(paraText);
      freeTrialFormEmail.appendChild(para);
      para.setAttribute("class", "free-trial-form-text free-trial-form-email-text");
      freeTrialFormEmailInput.classList.add("error");
      freeTrialFormEmailInput.setAttribute("placeholder", "");
    };
  } else if (freeTrialFormEmailInput.value !== "") {
    if (!freeTrialFormEmailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      if (!document.querySelector(".free-trial-form-email-icon")) {
        const iconError = document.createElement("img");
        freeTrialFormEmail.appendChild(iconError);
        iconError.setAttribute("src", "images/icon-error.svg");
        iconError.setAttribute("class", "free-trial-form-icon free-trial-form-email-icon");
      };
      if (document.querySelector(".free-trial-form-email-text")) {
        if (document.querySelector(".free-trial-form-email-text").innerHTML !== "Looks like this is not an email") {
          document.querySelector(".free-trial-form-email-text").innerHTML = "Looks like this is not an email";
        };
      } else {
        const para = document.createElement("p");
        const paraText = document.createTextNode("Looks like this is not an email");
        para.appendChild(paraText);
        freeTrialFormEmail.appendChild(para);
        para.setAttribute("class", "free-trial-form-text free-trial-form-email-text");
        freeTrialFormEmailInput.classList.add("error");
        freeTrialFormEmailInput.setAttribute("placeholder", "");
      };
    } else {
      if (document.querySelector(".free-trial-form-email-icon")) {
        const iconError = document.querySelector(".free-trial-form-email-icon");
        iconError.remove();
      };
      if (document.querySelector(".free-trial-form-email-text")) {
        const para = document.querySelector(".free-trial-form-email-text");
        para.remove();
      };
      freeTrialFormEmailInput.classList.remove("error");
      freeTrialFormEmailInput.setAttribute("placeholder", "Email Address");
    }
  };

  if (freeTrialFormPassInput.value === "" && !document.querySelector(".free-trial-form-pass-icon")) {
    const iconError = document.createElement("img");
    freeTrialFormPass.appendChild(iconError);
    iconError.setAttribute("src", "images/icon-error.svg");
    iconError.setAttribute("class", "free-trial-form-icon free-trial-form-pass-icon");
    const para = document.createElement("p");
    const paraText = document.createTextNode("Password cannot be empty");
    para.appendChild(paraText);
    freeTrialFormPass.appendChild(para);
    para.setAttribute("class", "free-trial-form-text free-trial-form-pass-text");
    freeTrialFormPassInput.classList.add("error");
    freeTrialFormPassInput.setAttribute("placeholder", "");
  } else if (freeTrialFormPassInput.value !== "" && !!document.querySelector(".free-trial-form-pass-icon")) {
    const iconError = document.querySelector(".free-trial-form-pass-icon");
    iconError.remove();
    const para = document.querySelector(".free-trial-form-pass-text");
    para.remove();
    freeTrialFormPassInput.classList.remove("error");
    freeTrialFormPassInput.setAttribute("placeholder", "Password");
  };
});