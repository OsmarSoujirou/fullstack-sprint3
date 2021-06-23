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
  
  reverseOrder() {
      this._productsList.reverse();
  }

}
