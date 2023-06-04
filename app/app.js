'use strict';

// express 사용해보기, 모듈
const express = require('express');
const dotenv = require("dotenv");
//const morgan = require("morgan");

const app = express();

// 환경 변수 (윈도우, 맥, 리눅스) 
dotenv.config();

// const accessLogStream = require('./src/config/log')

// 라우팅
const home = require("./src/routes/home")

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`)); // 프론트 JS를 위한 미들웨어, 정적 경로를 추가한다.
app.use(express.json()); // bodyParser 가 json을 파싱할 수 있도록
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended : true}));

//app.use(morgan(('dev'), {stream : accessLogStream }));

app.use('/', home); // use -> 미들 웨어를 등록해주는 메서드.

// app 내보내기
module.exports = app;
