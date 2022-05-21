import Pokemon from './pokemon'

test('Test 1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // de vuelve la información solicitada
});

//TDD test driven development
// 1) Escribir una prueba de lo que se quiere modelar
// 2) Correr la prueba y verla fallar
// 3) Escribir el codigo necesario para se aprueba la prueba