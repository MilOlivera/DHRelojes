window.onload = function () {
    let btncat0 = document.querySelectorAll('.button-category')[0];
    let btncat1 = document.querySelectorAll('.button-category')[1];
    let btncat2 = document.querySelectorAll('.button-category')[2];
    let product = document.querySelector('.product')

    btncat0.addEventListener('click', function() { 
        var cat_product = this.getAttribute('category');
        console.log(cat_product)
    product.classList.add('none')
})
}

// Pruebas 
// let db = require("../../src/database/models");

// window.addEventListener('DOMContentLoaded', function () {
// const filterBtns =  document.querySelectorAll('.btn-category')
// const container = documen.querySelector('.products-container')

// let producto = db.Producto.findAll();
// console.log(producto)
// let displayItems = producto.map(function (item) {
//     console.log(displayItems)
//     return `<section class="product">
                    
//     <a href="/products/${item.idProduct}" class="ref-link">
//     <div class="box-image">
 
//         <img src="/images/products/" alt="Foto Reloj" class="img-pl">
    
//     </div>
//     <article>
//         <p class="product-name">${item.name}</p>
//         <p class="product-price">$ ${item.price}</p>
//     </article>
//     </a>
    
// </section>`
// });


// displayItems = displayItems.join('');
// container.innerHTML = displayItems;

// filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       // console.log(e.currentTarget.dataset);
//       const category = e.currentTarget.dataset.id;
//       const menuCategory = menu.filter(function (menuItem) {
//         // console.log(menuItem.category);
//         if (menuItem.category === category) {
//           return menuItem;
//         }
//       });
//       if (category === "all") {
//         diplayMenuItems(menu);
//       } else {
//         diplayMenuItems(menuCategory);
//       }
//     });
//   });
// })