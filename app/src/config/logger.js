'use strict';

const {createLogger, transports, format } = require("winston");
const {combine, timestamp, simple, colorize, printf, label} = format;

const printFormat = printf(({timestamp,label, message, level}) => {
   return `${timestamp} [${label}] ${level} : ${message}`;
})

const printLogFormat = {
   file : combine(
   label({
      label : "백엔드 맛보기"
   }),
   timestamp({
      format: "YYYY-MM-DD HH:mm:dd"
   }),
   printFormat
   ),
   consloe : combine(
      colorize(),
      simple()
   ),
};

const opts = {
   file : new transports.File({
      filename : "access.log",
      dirname : "./logs",
      level: "info",
      format: printLogFormat.file,
   }),
   console : new transports.Console({
      level: "info",
      format: printLogFormat.consloe,
   }),
}


const logger = createLogger({
   transports: [opts.file],
})


// 개발 중인 파일과, 실제 만들어진것을 구분
if (process.env.NODE_ENV !== "production") {
   logger.add(opts.console)
}

module.exports = logger;