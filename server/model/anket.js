const mongoose = require('mongoose');

const AnketSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    }
});

const Anket = mongoose.model("Anket", AnketSchema);
module.exports = Anket;