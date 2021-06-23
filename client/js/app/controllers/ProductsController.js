class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(
      new Alert(),
      new AlertView($('#alertView')),
      'message'
    );
   
    this._allProducts = new Bind(
      new ProductsList(), 
      new ProductsView($('#products')), 
      'add', 'erase' , 'order', 'reverseOrder');

      this.importProducts();
  }

  importProducts() {

    let service = new ProductsService();
      service
      .allProducts()
      .then(products => products.forEach(products => {
        this._allProducts.add(products);
        this._alert.message = 'Negociações do período importadas'   
      }))
      .catch(erro => this._alert.message = erro);    

    
  }
}
