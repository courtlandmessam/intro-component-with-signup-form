const error = document.getElementById('error-message');
const email = document.getElementById('eadress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  if (!validateEmail(email.value)) {
    e.preventDefault();
    error.innerHTML = "This is not a valid email";
  }

})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
