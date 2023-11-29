var express = require('express');
const Apple_controlers= require('../controllers/Apple');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET Apple */
router.get('/', Apple_controlers.Apple_view_all_Page );

/* GET detail Apple page */
router.get('/detail', Apple_controlers.Apple_view_one_Page);

/* GET create Apple page */
router.get('/create', secured, Apple_controlers.Apple_create_Page);

/* GET create update page */
router.get('/update', secured, Apple_controlers.Apple_update_Page);

/* GET delete Apple page */
router.get('/delete', secured, Apple_controlers.Apple_delete_Page);

module.exports = router;
