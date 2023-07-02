const form = document.querySelector(".login-form");
const usernameInput = form.querySelectorAll('input')[0];
const passwordInput = form.querySelectorAll('input')[1];
let formData;



form.addEventListener("submit", event => {
  
  event.preventDefault();

  if (event.currentTarget.elements.email.value.trim() === "" || event.currentTarget.elements.password.value.trim() === "") {
    console.log("Please fill in all the fields!");
    alert("Please fill in all the fields!");
  }

  else { console.log("Submitted"); }

  event.currentTarget.reset();
});

usernameInput.addEventListener("input", event => {

  formData = { [event.currentTarget.name]: event.currentTarget.value.trim() };

})

passwordInput.addEventListener("input", event => {
  formData = { ...formData, [event.currentTarget.name]: event.currentTarget.value.trim() };
  console.log(formData);
})

