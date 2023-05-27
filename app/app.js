'use strict';

// express 사용해보기, 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./src/routes/home")

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");

app.use('/', home); // use -> 미들 웨어를 등록해주는 메서드.
app.use(express.static(`${__dirname}/src/public`)); // 프론트 JS를 위한 미들웨어, 정적 경로를 추가한다.


// app 내보내기
module.exports = app;