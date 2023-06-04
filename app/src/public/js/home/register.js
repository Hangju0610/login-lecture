"use strict";

// DOM -> Document Object Model

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register() {
    // id 가 비어있을 경우 경고창 표시
    if(!id.value) return alert("아이디를 입력해주십시오.")
    // 비밀번호가 일치하지 않는 경우 경고창 표시
    if (password.value !== confirmPassword.value) return alert("비밀번호가 일치하지 않습니다.")

    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
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
            if (res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생")
    });
}