const {Pool} = require('pg');


const config ={
    user:'orieftnajsglcj',
    host:'ec2-52-45-183-77.compute-1.amazonaws.com',
    database:'d2531gc0irn63m',
    password:'562431c224b8785466c78f092a5ebe4a0a527a5be0a6113a0ed0d7ba42a1388a',
    port:5432,
    ssl: { rejectUnauthorized: false },
}


const pool =new Pool(config);


module.exports= pool;