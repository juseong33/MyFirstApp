//const loginForm = document.querySelector("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

function handleOnSubmit(submitEvent) {
  submitEvent.preventDefault(); // 브라우저의 기본 동작을 막아줌
  const username = loginInput.value;
  const HIDDEN_CLASSNAME = "hidden";
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  console.log(username);
}

loginForm.addEventListener("submit", handleOnSubmit);
