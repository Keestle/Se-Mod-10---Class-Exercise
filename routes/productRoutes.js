const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', (req, res)=> {
    const allProducts = productController.getAllProducts();
    res.json({data: allProducts});
});

module.exports = router;
