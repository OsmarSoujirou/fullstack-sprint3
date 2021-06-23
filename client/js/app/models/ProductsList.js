class ProductsList {
 
  constructor() {        
    this._productsList = [];
  }
  
  add(product) {
    
    this._productsList.push(product);
  }
  
  get productsList() {
    
    return [].concat(this._productsList);
  }
  
  erase() {
    
    this._productsList= [];
  }
  
 
  order(criterion) {
  
    this._productsList.sort(criterion);        
  }

  filter(criterion) {  
   this._productsList.filter(function(product) {
        criterion in product.description;
  });        
  }
  
  reverseOrder() {
  
    this._productsList.reverse();
  }

}
