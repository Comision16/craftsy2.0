const express = require('express');
const router = express.Router();
const {detail, add, store, edit,update, remove, destroy} = require('../controllers/productsController');

const {uploadImageProduct} = require('../middlewares/upLoadFiles');

const productsValidator = require('../validations/productsAdd');


/* /products */
router
    .get('/add',add)
    .post('/add',productsValidator,uploadImageProduct.array('image',3),store)
    /*.post('/add',uploadImageProduct.single('image'),store)*/
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .get('/delete/:id', remove)
    .delete('/destroy/:id',destroy)

module.exports = router;