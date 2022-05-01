// Ejemplo 2: Crear un objeto con propiedades (es como un diccionario)
const explorer = {
    name: "Edu18RR",
    age: 31,
    mission: "Node JS",
    stack:["js","node","react", "vue"],
    blog: {
        url: "https://github.com/edu18RR",
        post: 5
}
  }
  //console.log("Accediendo a las propiedades del objeto") tambien muestra la informacion al inicio depende de la posición
  console.log(explorer)
  console.log("Accediendo a las propiedades del objeto") // ingresará a donde se refiere
  console.log(explorer.name)
  console.log(explorer["mission"])