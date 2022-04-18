// 1.- Crea el archivo pokemon.js. 
// 2.- Crea una clase Pokemon, exportala usando CommonJS, de tal forma que pueda usarse como se indica previamente.
// - Crea la clase.
// - Crea un constructor que permita recibir un nombre.
// - Crea la función sayHello().
// - Crea la función sayMessage().
// - Exporta la clase para que pueda ser importada en el archivo main.js.
class Pokemon {
    constructor(name) {
        // this es una variable para referenciar el valor del contexto local de esta clase
        this.name = name // Estás variables se le conocen como atributos
    }

    // método
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método
    sayHello() {
        console.log(`Hola yo soy un ${this.name}`)
    }

    // método
    sayMessage(message) {
        console.log(`${message}`)
    }
}

// Esta clase se exporta en este módulo
module.exports = Pokemon