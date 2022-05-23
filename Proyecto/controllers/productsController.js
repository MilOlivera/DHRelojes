const { hyphenToCamel } = require("ejs/lib/utils");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
// VER TODOS LOS PRODUCTOS ** VER TODOS LOS PRODUCTOS
    list: (req,res) => {
        res.render('productList', {products})  
    },
    

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


// DETALLE DE UN PRODUCTO ** DETALLE DE UN PRODUCTO
    productDetail: (req, res) => {
    
    let idDetail = req.params.id
    let detalle = products.find(elemento => elemento.id == idDetail)
    res.render("productDetail", {detalle})
    },


// EDICION DE UN PRODUCTO ** EDICION DE UN PRODUCTO
    edit: (req,res) => {
        let idDetail = req.params.id
        let detalle = products.find(elemento => elemento.id == idDetail)
        res.render("productEdit", { detalle })
    },

// ACTUALIZACION DE DATOS ** ACTUALIZACION DE DATOS
    confirm: (req, res) => {
        let searchedId = req.params.id
        let productToEdit = products.find(currentProduct => currentProduct.id == searchedId);
        /*let image;   

        if(req.files[0] != undefined) {
            image = req.files[0].filename
        } else {
            image = detalle.image
        }*/

        let auxilaryProduct = {
            id: productToEdit.id,
            ...req.body,
            image: image, 
        };

        Object.assign(productToEdit, auxilaryProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    },
}

module.exports = productsController;