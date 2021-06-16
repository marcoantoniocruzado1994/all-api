import app from './app'
import"@babel/polyfill";


//funcion de ejecucion de la app
async function main() {
   await app.listen(4000);
   console.log("El servidor esta en el puerto 4000");

}

main();