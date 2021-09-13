const { writeAndReadFunc } = require("./writeAndReadObject");

 function readLineFunc(objeto_creado) {
    const readline = require("readline");
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question(`¿Cual es tu nombre?: `, (answer1) => {
        objeto_creado.name = answer1;
      rl.question(`Vale, ahora dime tu apellido, ${answer1}: `, (answer2) => {
          objeto_creado.surname = answer2;
          rl.question(`¡Mucho gusto, ${answer1} ${answer2}!, ¿Que edad tienes?: ` , (answer3) => {
              objeto_creado.age = parseFloat(answer3)
              console.log(`Tus datos son: ${answer1} ${answer2} y tienes ${answer3} años.`);
              rl.close();
              writeAndReadFunc(objeto_creado);
            })
      })
      
    });
    };

module.exports = {readLineFunc}

// let objeto_creado = {"name": "", "surname": "", "age": ""};
// readLineFunc(objeto_creado);