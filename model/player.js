const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    name: String, 
    age: Number,
    text: String
});

module.exports = model('Player', playerSchema);