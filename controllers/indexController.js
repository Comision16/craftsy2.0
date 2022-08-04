const products = require('../data/products.json');

module.exports = {
    index: (req, res) => {
        return res.render("home", {
            title: "Home",
            products
        });
    },
    search : (req,res) => {

        let {keywords} = req.query;

        let result = products.filter(product => product.title.toLowerCase().includes(keywords.toLowerCase()));

        return res.render("result",{
            keywords,
            result
        })
    }
};
