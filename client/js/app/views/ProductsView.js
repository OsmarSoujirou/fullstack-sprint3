class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
      
          <ol class="products__list">
            ${model.productsList
              .map(
                (product) => `
              <li class="products__card">
                <div class="card">
                  <img
                    class="card__img"
                    src=${product.image}
                    alt=${product.description}
                  />
                  <p class="card__description">
                    ${product.description}
                  </p>
                  <p class="card__price">${product.amount}</p>
                </div>
              </li>
            `
              )
              .join('')}
          </ol>
        
    `;
  }
}
