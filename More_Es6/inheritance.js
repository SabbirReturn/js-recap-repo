class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
}


class dog extends Animal{
    constructor(name,age,breed){
        super(name,age)
        this.breed = breed
    }
    eat(){
        console.log(`${this.name} is eating Meet`)
    }
}
class bird extends Animal{
    constructor(name,age,color){
        super(name,age)
        this.color = color
    }
}

let dog1 = new dog('Tom',5,'German');
let bird1 = new bird('Moina', 2, 'Green')
console.log(bird1)
console.log(dog1);