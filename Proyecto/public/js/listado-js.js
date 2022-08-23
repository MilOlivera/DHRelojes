const btnFilter = document.querySelectorAll("#filter-btn");
const filter = document.querySelector("#filter");
const titulo = document.querySelector("#titulo");

window.onload = async function () {
  let all = await fetch("/api/filter").then((respuesta) => {
    return respuesta.json().then((data) => {
      return data.data[0];
    });
  });

  displayProducts(all);
  
  btnFilter.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const itemCategory = all.filter(function (itemProduct) {
        if (itemProduct.idCategoryFK == category) {
          return itemProduct;
        }
      });
      if (category == "all") {
        displayProducts(all);
      } else {
        displayProducts(itemCategory);
      }
      if (category == 1) {
        titulo.innerText = "Tinker";
      } else if (category == 2) {
        titulo.innerText = "Jaquet Droze";
      } else if (category == 3) {
        titulo.innerText = "Center Pompidou";
      } else if (category == 4) {
        titulo.innerText = "Colors of Nature";
      } else if (category == "all") {
        titulo.innerText = "Todos los productos";
      }
    });
  });
};

function displayProducts(itemsProducts) {
  let displayItems = itemsProducts.map(function (item) {
    return `<section class="product">
      <a href="/products/${item.idProduct}" category="${item.idCategoryFK}" class="ref-link">
        <div class="box-image">
            <img src="/images/products/${item.image}" alt="Foto Reloj" class="img-pl">
        </div>

        <article>
          <p class="product-name">${item.name}</p>
          <p class="product-price">$${item.price}</p>
        </article>

        <div class="cart-section">
          <form action="/products/cart" method="POST">
                <input type="hidden" name="id" value=${item.idProduct}>
                <input type="hidden" name="img" value=${item.image}>
                <input type="hidden" name="name" value=${item.name}>
                <input type="hidden" name="price" value=${item.price}>
                <button>Agregar al carrito</button>
            </form>
        </div>
      </a>
  </section>`;
  });

  displayItems = displayItems.join("");
  filter.innerHTML = displayItems;
}

// btnFilter.addEventListener('click', () => {
//   btnFilter.classList.add(button-category-click);
//   btnFilter.classList.remove(button-category)
// });

// btnFilter.addEventListener('click', function handleClick(event) {
//   event.target.classList.add('button-category-click');
//   event.target.classList.remove('button-category')
// });