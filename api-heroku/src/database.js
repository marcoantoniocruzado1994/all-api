const {Pool} = require('pg');


const config ={
    user:'jxkkpkrhwrteuf',
    host:'ec2-54-224-194-214.compute-1.amazonaws.com',
    database:'d5ju057urnu0ku',
    password:'73a8db3c4a3deac2550de79420c9ce42c78c8e235cc4099dc36c479098318137',
    port:5432,
    ssl: { rejectUnauthorized: false },
}


const pool =new Pool(config);


module.exports= pool;