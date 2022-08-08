const express = require('express');
const router = express.Router();
const {detail, add, store, edit,update, remove, destroy} = require('../controllers/productsController');

/* /products */
router
    .get('/add',add)
    .post('/add',store)
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .get('/delete/:id', remove)
    .delete('/destroy/:id',destroy)

module.exports = router;