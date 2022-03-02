const Person = require('./Person');
const Alumn = require('./Alumn');

let John = new Person("John",22);
let Ruan = new Person("Ruan",22);


let marquin = new Alumn("Marquin",25,"3001");

(function() {
    this.valor = 10
    console.log(this.valor,"1");
    const modulo = {
        valor:20,
        getValor: function() {
            console.log(this.valor,"2");
            return this.valor
        }
    }
    console.log(modulo.getValor(),"3")
    const getValor = modulo.getValor;
    console.log(getValor(),"4");
})()
