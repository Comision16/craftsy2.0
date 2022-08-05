const fs = require('fs');
const path = require('path');

const products = require('../data/products.json');
const brands = require('../data/brands.json');

module.exports = {
    detail : (req,res) => {
        
        const {id} = req.params;
        let product = products.find(product => product.id === +id)

        return res.render('productDetail',{
            title : 'Detalle',
            product
        })
    },
    add : (req,res) => {
        return res.render('productAdd',{
            brands : brands.sort()
        })
    },
    store : (req,res) => {

        let {title, price,discount, description, brand, section} = req.body;
        let newProduct = {
            id : products[products.length - 1].id + 1,
            ...req.body,
           title : title.trim(),
           description : description.trim(),
           price : +price,
           discount : +discount,
           image : "default-image.png"
        }

        let productsNew = [...products, newProduct];

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'),JSON.stringify(productsNew),'utf-8');    
        return res.redirect('/');

    },
    edit : (req,res) => {

        const {id} = req.params;
        let product = products.find(product => product.id === +id)

        return res.render('productEdit',{
            product
        })
    }
}