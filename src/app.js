'use strict';

// express 사용해보기, 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./routes/home")

// 앱 세팅
app.set("views","./views");
app.set("view engine","ejs");

app.use('/', home); // use -> 미들 웨어를 등록해주는 메서드.

// app 내보내기
module.exports = app;