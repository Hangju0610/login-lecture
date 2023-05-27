'use strict';

const express = require('express');
const router = express.Router();
//Controller 분리
const ctrl = require('./home.ctrl');

router.get('/',ctrl.output.home);
router.get('/login',ctrl.output.login);
router.post('/login',ctrl.process.login);

module.exports = router;
