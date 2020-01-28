const form = document.getElementById('form');
const error = document.getElementById('error-message');
const fname = document.getElementById('fname');
const fnameError = document.getElementById('fname-error');
const lname = document.getElementById('lname');
const lnameError = document.getElementById('lname-error');
const email = document.getElementById('eaddress');
const emailError = document.getElementById('eaddress-error');
const pword = document.getElementById('pword');
const pwordError = document.getElementById('pword-error');



form.addEventListener('submit', (e) => {
  if (fname.value == "") {
    e.preventDefault();
    fnameError.innerHTML = "First name cant be empty";
  }

  if (lname.value == "") {
    e.preventDefault();
    lnameError.innerHTML = "Last name cant be empty";
  }

  if (email.value == "") {
    e.preventDefault();
    emailError.innerHTML = "Email cant be empty";
  } else if (!validateEmail(email.value)) {
      e.preventDefault();
      emailError.innerHTML = "This is not a valid email";
    }

  if (pword.value == "") {
    e.preventDefault();
    pwordError.innerHTML = "Password cant be empty";
  }


})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
