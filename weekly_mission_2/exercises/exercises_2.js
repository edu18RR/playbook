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
console.log ("Ejercicio 2.1")
explorers.forEach(explorer => console.log (explorer))
//explorers.forEach(explorer => console.log (explorer.name)) = nombres

console.log ("Ejercicio 2.2")
explorers.forEach(item => console.log (item.stack))

console.log ("Ejercicio 2.3")
const explorers_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log (explorers_stacks)

console.log ("Ejercicio 2.4")
const explorers_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log (explorers_with_js)

console.log ("Ejercicio 2.5")
const first_explorers_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX") //validación ===
console.log (first_explorers_in_cdmx)

console.log ("Ejercicio 2.6")
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed,0) //acc=0 iniciar el acomulador
console.log (all_exercises)

console.log("Ejercicio 2.7")
const validacion_frontend = explorers.some(Element => Element.missions.frontend.exercisesFinished === true)
console.log("Validacion de los ejercicios frontend: " + validacion_frontend) 

console.log("Ejercicio 2.8")
const validacion_onboarding= explorers.every(Element => Element.missions.onboarding.isFinished ===true)
console.log("validacion onboarding "+ validacion_onboarding)
