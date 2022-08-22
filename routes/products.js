const express = require('express');
const router = express.Router();
const {detail, add, store, edit,update, remove, destroy} = require('../controllers/productsController');

const {uploadImageProduct} = require('../middlewares/upLoadFiles');

const {productsAddValidator, productsEditValidator} = require('../validations')

/* /products */
router
    .get('/add',add)
    .post('/add',uploadImageProduct.array('image',3),productsAddValidator,store)
    /*.post('/add',uploadImageProduct.single('image'),store)*/
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)
    .put('/update/:id',productsEditValidator,update)
    .get('/delete/:id', remove)
    .delete('/destroy/:id',destroy)

module.exports = router;