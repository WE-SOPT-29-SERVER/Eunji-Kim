//모든 라우트가 모여 있는 파일
var express = require('express');
var router = express.Router();

// '/user' 이하의 경로로 들어온 요청은 모두 user 폴더 안에서 처리
router.use('/user', require("./user"));
// '/post' 이하의 경로로 들어온 요청은 모두 post 폴더 안에서 처리
router.use('/post', require("./post"));

module.exports = router; 
