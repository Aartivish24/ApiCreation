
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    isBestSeller: {
        type: Boolean,
        type: Boolean,
        default: true,
        required: true,
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model("Book" ,bookSchema);

