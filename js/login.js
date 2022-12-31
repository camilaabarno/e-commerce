(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } 
        if (form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          guardarLocalStorage()
          location.href = "home.html";
        }
        form.classList.add('was-validated')
      }, false)
    })
})()
let email = document.getElementById("email");
let password = document.getElementById("password");
let eye = document.getElementById("eye");

function showPassword() {
  if (password.type === "password") {
    password.type = "text";
    eye.style.color = "#fff";
  } else {
    password.type = "password";
    eye.style.color = "#000000";
  }
}

function guardarLocalStorage() {
  if(email){
    localStorage.setItem("email", email.value);
    let ejemplo = localStorage.getItem('email');
  }
 
}   