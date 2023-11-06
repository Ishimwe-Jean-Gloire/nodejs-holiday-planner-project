import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    isReplied:{
        type: Boolean,
        default: false
    }

});

export const Contact = mongoose.model("Contact", contactSchema);