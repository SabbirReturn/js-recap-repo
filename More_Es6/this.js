class vehicle{
    constructor(type,price){
        this.type = type;
        this.price = price;
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        console.log(this.price)
    }
}

let car1 = new vehicle('car',5000)
// console.log(car1.price)
car1.getPrice()
// car1.getThis();

let person={
    name: 'Sabbir Hasan',
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}
person.greet()