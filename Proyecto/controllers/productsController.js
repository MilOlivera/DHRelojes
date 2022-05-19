const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {

// CREAR UN PRODUCTO ** CREAR UN PRODUCTO

  create: (req, res) => {
    console.log();
    res.render('productAdd');
},

// GUARDAR UN PRODUCTO CREADO ** GUARDAR UN PRODUCTO CREADO
    store: (req, res) => {
  
        let image;
            console.log(req.file);
            if(req.files[0] != undefined){
                image = req.files[0].filename
            } else {
                image = 'default-image.png'
            }
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: image
            };
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
},
    productDetail: (req, res) => {
    res.render("./products/productDetail")
    }
}

module.exports = productsController;