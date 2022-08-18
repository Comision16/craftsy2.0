const {check} = require('express-validator');

module.exports = [
    check('title')
        .notEmpty()
        .withMessage('El nombre del producto es obligatorio')
        .isLength({
            min : 5,
            max : 20
        }).withMessage('El nombre debe tener entre 5 y 20 caracteres'),
    check('price')
        .notEmpty()
        .withMessage('El precio es requerido')
        .isNumeric({
            no_symbols: true
        }).withMessage('Solo números positivos'),
    check('section')
        .notEmpty()
        .withMessage('Debes indicar la sección'),
    check('brand')
        .notEmpty()
        .withMessage('Debes indicar la marca'),
    check('description')
        .notEmpty()
        .withMessage('Debes dar una descripción'),
]