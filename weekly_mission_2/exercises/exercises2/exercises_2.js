//* ejercicio 2
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
console.log (explorers)

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log ("Ejercicio 2.1")
explorers.forEach(explorer => console.log (explorer))
//explorers.forEach(explorer => console.log (explorer.name)) = nombres

// Imprime el stack de cada explorer, usa FOR EACH
console.log ("Ejercicio 2.2")
explorers.forEach(item => console.log (item.stack))

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log ("Ejercicio 2.3")
const explorers_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log (explorers_stacks)

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log ("Ejercicio 2.4")
const explorers_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log (explorers_with_js)

// Busca el primer explorer que sea de la CDMX, usa FIND
console.log ("Ejercicio 2.5")
const first_explorers_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX") //validación ===
console.log (first_explorers_in_cdmx)

// Obtén la suma de todos los exercises_completed, usa REDUCE
console.log ("Ejercicio 2.6")
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed,0) //acc=0 iniciar el acomulador
console.log (all_exercises)

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("Ejercicio 2.7")
const validacion_frontend = explorers.some(Element => Element.missions.frontend.exercisesFinished === true)
console.log("Validacion de los ejercicios frontend: " + validacion_frontend) 

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("Ejercicio 2.8")
const validacion_onboarding= explorers.every(Element => Element.missions.onboarding.isFinished ===true)
console.log("validacion onboarding "+ validacion_onboarding)
