class Product {
  // TODO: implementar
  constructor(image, description, amount){

        this._image = image;
        this._description = description;
        this._amount = amount;
        Object.freeze(this);        
  }

  get image() {
    return this._image;
  }
  get description() {
    return this._description;
  }
  get amount() {
    return this._amount;
  }
}
