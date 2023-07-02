const form = document.querySelector(".login-form");
const usernameInput = form.querySelectorAll('input')[0];
const passwordInput = form.querySelectorAll('input')[1];
let formData;



form.addEventListener("submit", event => {
  console.log("Submitted");
  event.preventDefault();

  if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
    alert("Please fill in all the fields!");
  }
  event.currentTarget.reset();
});

usernameInput.addEventListener("input", event => {

  formData = { [event.currentTarget.name]: event.currentTarget.value.trim() };

})

passwordInput.addEventListener("input", event => {
  formData = { ...formData, [event.currentTarget.name]: event.currentTarget.value.trim() };
  console.log(formData);
})

