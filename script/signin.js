const $ = document.querySelector.bind(document);

const signIn = $('.header-user');
const userLogin = $('.user-login');
const closeSignIn = $('.close-btn');
signIn.onclick = function () {
  userLogin.style.display = 'block';
}

closeSignIn.onclick = function () {
  userLogin.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == userLogin) {
    userLogin.style.display = "none";
  }
}