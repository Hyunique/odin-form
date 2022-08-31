const form = document.querySelector("form");
const email = document.getElementById("email");
const firstName = document.getElementById("fistName");
const lastName = document.getElementById("lastName");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPW = document.getElementById("confirmPW");
const pwError = document.querySelector("#confirmPW + span.error");
const button = document.querySelector('button')

window.onload = function () {
    document.addEventListener("input", function (event) {

        if (confirmPW.value && password.value !== confirmPW.value) {
            pwError.textContent = 'Does not match with password'
        } else {
            pwError.textContent = ''
        }
    });

}



// email.addEventListener("input", (event) => {
//     // Each time the user types something, we check if the
//     // form fields are valid.

//     if (email.validity.valid) {
//         // In case there is an error message visible, if the field
//         // is valid, we remove the error message.
//         emailError.textContent = ""; // Reset the content of the message
//         emailError.className = "error"; // Reset the visual state of the message
//     } else {
//         // If there is still an error, show the correct error
//         showError();
//     }
// });

// form.addEventListener("submit", (event) => {
//     // if the email field is valid, we let the form submit
//     if (!email.validity.valid) {
//         // If it isn't, we display an appropriate error message
//         showError();
//         // Then we prevent the form from being sent by canceling the event
//         event.preventDefault();
//     }
// });

// function showError() {
//     if (email.validity.valueMissing) {
//         // If the field is empty,
//         // display the following error message.
//         emailError.textContent = "You need to enter an e-mail address.";
//     } else if (email.validity.typeMismatch) {
//         // If the field doesn't contain an email address,
//         // display the following error message.
//         emailError.textContent = "Entered value needs to be an e-mail address.";
//     } else if (email.validity.tooShort) {
//         // If the data is too short,
//         // display the following error message.
//         emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//     }

//     // Set the styling appropriately
//     emailError.className = "error active";
// }



// document.addEventListener("input", (event) => {
//     console.log(event.target) //Gets the element
//     console.log(event.target.value) //Gets a property of the element
//     event.target.style.color = "red"; //Modifies the css property of the element
// })


// window.onload = function () {

//     document.addEventListener("input", function (event) {
//         let elm = event.target;
//         if (elm.className == 'firstName') {
//             elm.style.backgroundColor = elm.style.backgroundColor == "green" ? "blue" : "red";
//         }
//     });

// }