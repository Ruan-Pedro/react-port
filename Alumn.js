const Person = require('./Person');

class Alumn extends Person{
    constructor(name,age,classGroup){
        super(name,age);
        this.classGroup = classGroup;
    }
}
module.exports = Alumn;