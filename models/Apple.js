const mongoose = require("mongoose")
const AppleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        // Custom validator using RegExp
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Ensure length of Apple name between 3 and 30
            },
            message: props => `${props.value} is not a valid username! Use only letters, numbers, and underscores.`,
        },
    },
    color: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid color! Color must be a non-negative number.`,
        },
    },
    price: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid price! Price must be a non-negative number.`,
        },
    },
})
module.exports = mongoose.model("Apple", AppleSchema)

    
    