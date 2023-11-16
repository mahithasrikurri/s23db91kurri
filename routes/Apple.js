var express = require('express');
const Apple_controlers= require('../controllers/Apple');
var router = express.Router();
/* GET Apple */
router.get('/', Apple_controlers.Apple_view_all_Page );
module.exports = router;

