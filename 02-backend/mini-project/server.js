const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors')
const Pool = require('pg').Pool;
const { readCategory, createCategory, updateCategory, deleteCategory } = require('./Category');
const { createProduct, readProduct, updateProduct, deleteProduct } = require('./Product');
const { createUser, readUser, updateUser, deleteUser } = require('./User');
const { createCart, readCart, updateCart, deleteCart } = require('./Cart');
const { createOrders, readOrders, deleteOrders, updateOrders } = require('./Orders');
const { createProductImage, readProductImage, updateProductImage, deleteProductImage } = require('./ProductImage');
const { readUserRoles } = require('./UserRoles');
const { createRoles, readRoles, updateRoles, deleteRoles } = require('./Roles');
const { createProvince, readProvince, updateProvince, deleteProvince } = require('./Province');
const { createCity, readCity, updateCity, deleteCity } = require('./City');
const { createAddress, readAddress, updateAddress, deleteAddress } = require('./Address');

// config database pg
const pool = new Pool({
    user: "postgres",
    password: "agas",
    host: "localhost",
    port : 5432,
    database: "quiz"
})

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server listen on port ${port}`));

// Category
createCategory(app,pool);
readCategory(app,pool);
updateCategory(app,pool);
deleteCategory(app,pool);

// Product
createProduct(app,pool);
readProduct(app,pool);
updateProduct(app,pool);
deleteProduct(app,pool);

// User
createUser(app,pool);
readUser(app,pool);
updateUser(app,pool);
deleteUser(app,pool);

// Cart
createCart(app,pool);
readCart(app,pool);
updateCart(app,pool);
deleteCart(app,pool);

// Orders
createOrders(app,pool);
readOrders(app,pool);
updateOrders(app,pool);
deleteOrders(app,pool);

// Product Image
createProductImage(app,pool);
readProductImage(app,pool);
updateProductImage(app,pool);
deleteProductImage(app,pool);

// Order Detail

// User Roles
readUserRoles(app,pool);

// Roles
createRoles(app,pool);
readRoles(app,pool);
updateRoles(app,pool);
deleteRoles(app,pool);

// Province
createProvince(app,pool);
readProvince(app,pool);
updateProvince(app,pool);
deleteProvince(app,pool);

// City
createCity(app,pool);
readCity(app,pool);
updateCity(app,pool);
deleteCity(app,pool);

// Address
createAddress(app,pool);
readAddress(app,pool);
updateAddress(app,pool);
deleteAddress(app,pool);