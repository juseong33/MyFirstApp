//const loginForm = document.querySelector("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

function handleOnSubmit(submitEvent) {
  submitEvent.preventDefault(); // 브라우저의 기본 동작을 막아줌
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", handleOnSubmit);
