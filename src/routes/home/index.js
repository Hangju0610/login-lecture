'use strict';

const express = require('express');
const router = express.Router();
//Controller 분리
const ctrl = require('./home.ctrl');

router.get('/',ctrl.home)

router.get('/login',ctrl.login)

module.exports = router;
