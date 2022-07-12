const { hyphenToCamel } = require("ejs/lib/utils");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsPath = path.join(__dirname, "../views/products");

const productsController = {
// VER TODOS LOS PRODUCTOS ** VER TODOS LOS PRODUCTOS
    list: (req,res) => {
        res.render(productsPath + '/productList', {products})  
    },
    

// CREAR UN PRODUCTO ** CREAR UN PRODUCTO
    create: (req, res) => {
        console.log();
        res.render(productsPath + '/productAdd');
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
            ...req.body,
            id: products[products.length - 1].id + 1,
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
    res.render(productsPath + '/productDetail', {detalle})
    },


// EDICION DE UN PRODUCTO ** EDICION DE UN PRODUCTO
    edit: (req,res) => {
        let idDetail = req.params.id
        let detalle = products.find(elemento => elemento.id == idDetail)
        res.render(productsPath + "/productEdit", { detalle })
    },

// ACTUALIZACION DE DATOS ** ACTUALIZACION DE DATOS
    confirm: (req, res) => {
        let searchedId = req.params.id
        let productFind = products.find(currentProduct => currentProduct.id == searchedId);

        let image;
        console.log(req.file);
        if(req.files){
            image = req.files
        } else {
            image = productFind.image
        }
    
        let productToEdit = {
            id: Number(searchedId),
            ...req.body,
            price: Number(req.body.price),
            image: image
        };
    
        for (let i = 0; i < products.length; i ++) {
            if (productToEdit.id == products[i].id) {
                products[i] = productToEdit
            }
        }

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect ("/");
    },

// DELETE ** DELETE
    delete: (req, res) => {

        let destroy = products.filter(elem => elem.id != req.params.id);

        let auxilaryProduct = {
            id: destroy.id,
            ...req.body,
        };
        Object.assign(destroy, auxilaryProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(destroy, null, ' '));
        res.redirect('/');
    },

    // CARRITO ** CARRITO
    cart: (req, res) => {
    
    let idDetail = req.params.id
    let detalle = products.find(elemento => elemento.id == idDetail)
    // res.render(productsPath + '/productDetail', {detalle})
    res.render(productsPath + '/productCart', {detalle})

    },


     
    }



module.exports = productsController;