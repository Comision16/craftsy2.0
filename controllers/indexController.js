const fs = require('fs');
const path = require('path');
module.exports = {

    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));
        let destacados = products.filter(product => product.section === "temporada" && product.discount === 0);
        let ofertas = products.filter(product => product.discount > 0);
        let samsung = products.filter(product => product.brand.toLowerCase() === "samsung")
        return res.render("home", {
            title: "Home",
            destacados,
            ofertas,
            samsung
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
