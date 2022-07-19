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