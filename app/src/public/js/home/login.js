"use strict";

// DOM -> Document Object Model

const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login() {
    const req = {
        id : id.value,
        password : password.value,
    };

    fetch("/login", {
        method : "POST", 
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) { // 성공시 / 경로로 이동
            location.href = ("/")
        } else { // 실패시 알람 띄우기
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생")
    });
}