const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    googleId: {
        type: String,
        require: true
    }, 
    displayName: {
        type: String,
        require: true
    },
    firtsName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    }
    , 
    image: {
        type: String,
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})


module.exports = model('User',userSchema);

