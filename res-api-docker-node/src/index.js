const app = require('./app')


async function main() {
   await  app.listen(3000);
    console.log("el servido esta corriendo");
}

// ejecutando la funcion principal
main();