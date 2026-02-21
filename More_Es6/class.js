class player{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
    }
    goal(){
        console.log('software engineer')
    }
}

let player1 = new player('Sabbir Hasan', 25);
let player2 = new player('Hasan',29);
player1.goal()
console.log(player1)
console.log(player2)

