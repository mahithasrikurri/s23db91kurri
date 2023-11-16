const mongoose = require("mongoose")
const AppleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("Apple",
AppleSchema)

    
    