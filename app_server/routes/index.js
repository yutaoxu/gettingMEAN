var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); // 不用写文件扩展名，默认为 .js

/* GET home page. */
router.get('/', ctrlMain.index); // 这里的 index 是../controllers/main.js 文件里定义的 module.exports.index

module.exports = router;
