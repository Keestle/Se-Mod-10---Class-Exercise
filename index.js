const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const productController = require('./controllers/productController');

const app = express();
const port = 4000;

app.use(bodyParser.json());

// Initialize products on server start
productController.initializeProducts();

app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
