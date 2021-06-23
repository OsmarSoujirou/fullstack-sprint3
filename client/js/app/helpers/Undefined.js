class Undefined {
    constructor(event) {
        this.obj = event;
    }

    teste(){
        if (typeof obj === typeof undefined) {            
            return false;
        } 

        console.log("teste");
        return obj.target.value;
    }
  }
  