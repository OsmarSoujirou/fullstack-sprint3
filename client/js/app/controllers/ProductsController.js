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
      'add', 'erase' );

    this.importProducts();
    this.productsFilter();   

  }

  productsFilter(){
         //setup before functions
     let typingTimer;                //timer identifier
     let doneTypingInterval = 1000;  //time in ms (2 seconds)
     let myInput =  document.querySelector('#inputSearch');
 
     //on keyup, start the countdown
     myInput.addEventListener('keyup', () => {
         clearTimeout(typingTimer);         
         typingTimer = setTimeout(() => this.importProducts(myInput.value), doneTypingInterval);
         
     });
  }

  importProducts(event='') {
    
    let service = new ProductsService();
   
    service
    .allProducts()
    .then(        
      (products) => {
        this._allProducts.erase();
        products.forEach(          
          products => {
          if(event){            
            if (products.description.toUpperCase().includes(event.toUpperCase())){
              this._allProducts.add(products);
              this._alert.message = 'Filtro aplicado!'   
            }
            } else {
              this._allProducts.add(products);
              this._alert.message = 'Lista de produtos carregada!'  
            }           
          });        
        if (this._allProducts.productsList.length == 0) this._alert.message = 'Sem resultados!'          
        setTimeout(() => this._alert.message = '', 5000);     
      }      
    )
        .catch(erro => this._alert.message = erro);
  }
}
