// // Declaracion de strings

// const option1 = "Hola Mundo"
// const option2 = String("hola mundo")
// const option3 = new String ("hola mundo")

// // console.info(option1)
// // console.info(option2)
// // console.info(option3)

// //Extraccion de datos

// const message = "Mensaje de prueba"
// document.write(message)

// // Extraer la cantidad de tareas
// console.info(message.length)
// console.info(message[1])
// console.info(message.charAt(1)) //retorna un caracter especifico de un index
// console.info(message.search("Mensaje"))
// console.info(message.includes("Mensaje de pruebas"))
// console.info(message.startsWith("Mensaje"))
// console.info(message.endsWith("prueba"))


// // Concatenacion

// const messageOne = "Este es un mensaje para"
// const messageTwo= "practicar concatenacion"
// const fullName = "Pablo Andres Lopez Zapata"

// console.info("Opcion 1 (+): " + messageOne + " " + messageTwo)
// console.log("Opcion 2 (,): " , messageOne, messageTwo);
// console.log(`Option 3 ($):  ${messageOne}  ${messageTwo}`);
// console.info("Option 4 concat()",  messageOne.concat(" ",messageTwo))


// const header = 
// `
// <header>
// <h1>Hola mundo, mi nombre es ${fullName}</h1>
// </header>
// `

// document.write(header)

// // Depuracion de strings
// const coment = "HoLA cOMo eStAS"
// document.write(coment)

// console.log(coment.toLowerCase())
// console.log(coment.toUpperCase())

// // Limpieza de espacios
// const comment = "    pablitodahiana@gmail.com     "
// console.log(comment)
// console.info(comment.trimStart())
// console.info(comment.trimEnd())
// console.info(comment.trim())

//Fragmentacion de un string

// const message = "anita lava la tina porque se porto mal"
// document.write(message)

// console.info(message.substring(0,9)) //solo strings

// console.info(message.slice(0,10)) //string and list

// console.info(message.replace("a","e")) //replaza la primera coincidencia que encuentre
// console.info(message.replaceAll("a", "e"))
// console.info(message.replaceAll(/[aeiou]/g,"p"))

//relleno de string
const message = "riwi"
document.write(message)
console.info(message.repeat())