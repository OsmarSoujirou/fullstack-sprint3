class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    // TODO: implementar
    return this._http
            .get('api/products')
            .then(productsList => {                
                return productsList.map(product => new Product(product.image, product.description, product.value));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter a lista de produtos.');
            });  

  }
}
