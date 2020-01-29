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
    $("#fname").addClass("error");
  } else {
    $("#fname").removeClass("error");
    fnameError.innerHTML = null;
  }

  if (lname.value == "") {
    e.preventDefault();
    lnameError.innerHTML = "Last name cant be empty";
    $("#lname").addClass("error");
  } else {
    $("#lname").removeClass("error");
    lnameError.innerHTML = null;
  }

  if (email.value == "") {
    e.preventDefault();
    emailError.innerHTML = "Email cant be empty";
    $("#eaddress").addClass("error");
  } else if (!validateEmail(email.value)) {
      e.preventDefault();
      emailError.innerHTML = "This is not a valid email";
      $("#eaddress").addClass("error");
    } else {
      $("#eaddress").removeClass("error");
      emailError.innerHTML = null;
    }

  if (pword.value == "") {
    e.preventDefault();
    pwordError.innerHTML = "Password cant be empty";
    $("#pword").addClass("error");
  } else {
    $("#pword").removeClass("error");
    pwordError.innerHTML = null;
  }


})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
