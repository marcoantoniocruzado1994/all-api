const {Pool} = require('pg');

const config ={
    user:'postgres',
    host:'localhost',
    database:'clientes',
    password:'root',
    port:5432
}

const pool = new Pool(config)


const getClientes= async()=>{
  try {
    const {rows} = await pool.query('select * from compañias')
    console.log(rows);

  } catch (e) {
      console.log(e);
  }
}

const inserClientes = async()=>{
   try {
    const text ="insert into compañias(nombre,direccion,rubro) values($1,$2,$3)"
    const valores = ['p&g','rimac','baños']
    const res = await pool.query(text,valores)
    console.log(res);
   } catch (error) {
       console.log(error);
   }
}

const deleteCliente = async()=>{
    const text= 'DELETE FROM compañias WHERE nombre=$1'
    const valorEliminado = ['donofrio']
    const deleteRow = await pool.query(text,valorEliminado);
    console.log("fila eliminada"+deleteRow); 
}

const editCliente=async()=>{
    const text = 'UPDATE compañias SET nombre =$1 WHERE nombre = $2';
    const valoresActualizados = ['victoria','p&g'];

    const valorActual =await pool.query(text,valoresActualizados);
    console.log("la compañias fyue actualizada"+valorActual);
}

//inserClientes();
getClientes();
//deleteCliente();
//editCliente();