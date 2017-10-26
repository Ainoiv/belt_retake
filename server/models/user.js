const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
}, { timestamp: true })

mongoose.model("User", UserSchema)

const QuestionSchema = mongoose.Schema({
    question: { type: String, required: true, minlength: 8 },
    option1: { type: String, required: true, minlength: 3 },
    option2: { type: String, required: true, minlength: 3 },
    option3: { type: String, required: true, minlength: 3 },
    option4: { type: String, required: true, minlength: 3 },

}, { timestamp: true })

mongoose.model("Question", QuestionSchema)