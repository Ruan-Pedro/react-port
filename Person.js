

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        console.log(`Hello!! Is everything Okay? My name is ${this.name}`);
    }
}
module.exports = Person;