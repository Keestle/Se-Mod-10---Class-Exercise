const axios = require('axios');
const Product = require('../models/productModel'); // Fix: Use Product instead of product

// Create a function to fetch data with axios from FakeStoreAPI

async function fetchProducts() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=10');
        return response.data.map((item) => new Product(item.id, item.title, item.price, item.description));
    } catch (error) { 
        console.error("Error fetching products:", error.message); 
    }
}

// Create an array to store products 
let products = [];

// I need to create the controllers to handle the CRUD functions, use that to export.

exports.initializeProducts = async () => {
    products = await fetchProducts();
    console.log('Products fetched and stored in memory.');
};

exports.getAllProducts = () => {
    return products;
};
