const mongoose = require('mongoose');

const connectDB= async()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })

        console.log(`Base de datos conectada y se llama ${conn.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;