const mongoose = require('mongoose');

const debutsSchema = new mongoose.Schema({
    characterName: {
        type: String,
        required: true,
        unique: true,
    },

    film: String,

    year: Number,
});

const Debut = mongoose.model('Debut', debutsSchema);

module.exports = Debut;