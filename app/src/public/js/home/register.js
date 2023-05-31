"use strict";

// DOM -> Document Object Model

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register() {
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        confirmPassword : confirmPassword.value,
    };

    fetch("/register", {
        method : "POST", 
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) { // 성공시 / 경로로 이동
            location.href = ("/login")
        } else { // 실패시 알람 띄우기
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생")
    });
}