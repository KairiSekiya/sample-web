'use strict'

//目アイコン、パスワード表示
/////////////////////////////////////////////////////
function eye_button_1 () {
  let password_1 = document.getElementById("password_1")
  let eye_button_1 = document.getElementById("eye_button_1")

  if (password_1.type === "password") {
    password_1.type = "text";
    eye_button_1.className = "fa-solid fa-eye-slash";
  } else {
    password_1.type = "password";
    eye_button_1.className = "fa-solid fa-eye";
  }
};

function eye_button_2 () {
  let password_2 = document.getElementById("password_2")
  let eye_button_2 = document.getElementById("eye_button_2")

  if (password_2.type === "password") {
    password_2.type = "text";
    eye_button_2.className = "fa-solid fa-eye-slash";
  } else {
    password_2.type = "password";
    eye_button_2.className = "fa-solid fa-eye";
  }
};
/////////////////////////////////////////////////////