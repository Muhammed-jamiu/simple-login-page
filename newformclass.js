let btn = document.getElementById("btn");
let passwordInput = document.getElementById("passwordInput");

btn.addEventListener("click", function () {
  password = passwordInput;
  //   let password = passwordInput.type;
  if (password.type === "password") {
    password.type = "text";
    // btn.innerHTML = "Hide";
  } else {
    passwordInput.type = "password";
    // btn.innerHTML = "Show";
  }
  //the function below is used to show the inputEntered on password input to show and disappear when the button is clicked and we will comment the function  btn.innerHTML ="Show";/ btn.innerHTML from the script....

  setTimeout(function () {
    password.type = "password";
  }, 100);
  btn.onmousedown(function () {
    password.type = "text";
  });
});
