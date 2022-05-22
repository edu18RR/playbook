const Ajolonauta = require('./../app/Ajolonauta') //pat relativo sin JS

//Describir primero la clase
describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        // Aqui tu puedes usar el código como lo deseas utilizar
        const woopa = new Ajolonauta("Woopa") //lugar de la app

        // validar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})