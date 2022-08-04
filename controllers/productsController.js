const products = require('../data/products.json');

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
        return res.render('productAdd')
    },
    store : (req,res) => {
        return res.send(req.body)
    },
    edit : (req,res) => {

        const {id} = req.params;
        let product = products.find(product => product.id === +id)

        return res.render('productEdit',{
            product
        })
    }
}