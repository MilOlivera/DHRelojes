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
        titulo.innerText = "Jacquet Droze";
      } else if (category == 3) {
        titulo.innerText = "Center Pomp";
      } else if (category == 4) {
        titulo.innerText = "Colors Nature";
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
      </a>
  </section>`;
  });
  displayItems = displayItems.join("");
  filter.innerHTML = displayItems;
}
