//const loginForm = document.querySelector("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginButtonClick() {
  const userName = loginInput.value;
  console.log(userName);
}

loginButton.addEventListener("click", handleLoginButtonClick);
