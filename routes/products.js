const express = require('express');
const router = express.Router();
const {detail, add, store, edit} = require('../controllers/productsController');

/* /products */
router
    .get('/add',add)
    .post('/add',store)
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)

module.exports = router;