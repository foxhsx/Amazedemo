

const express = require('express');
const router  = express.Router();
const data = require('../data/xchart');
router.get('/',(req,res,next) => {
    res.json(data);
    // console.log(data)
});



// 导出模块
module.exports = router;