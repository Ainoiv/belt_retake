const mongoose = require("mongoose")
const User = mongoose.model("User")
const Question = mongoose.model("Question")

module.exports = {

    get_all_users: (req, res) => {
        User.find({})
            .then(users => res.json(users))
            .catch(err => {
                console.log("User find ERROR", err)
                res.status(500).json(err)
            })
    },

    am_i_logged_in: (req, res) => {
        if (req.session.user) {
            res.json(req.session.user)
        } else {
            res.status(401).json(false)
        }
    },

    login: (req, res) => {
        User.findOne({ name: req.body.name })
            .then(user => {
                if (user) {
                    req.session.user = user
                    res.json(true)
                } else {
                    let new_user = new User(req.body)

                    new_user.save()
                        .then(() => {
                            req.session.user = new_user
                            res.json(true)
                        })
                        .catch(err => {
                            console.log("User save ERROR", err)
                            res.status(500).json(err)
                        })
                }
            })
    },

    logout: (req, res) => {
        req.session.destroy()
        res.redirect("/")
    },

    add: (req, res) => {
        // console.log("hey", req.body)
        let new_question = new Question(req.body)
        new_question.save()
            .then(() => {
                console.log('Successfully added question')
                res.json(true)
            })
            .catch(err => {
                console.log('Question save ERROR', err)
                res.status(500).json(err)
            })
    },

    get_all_question: (req, res) => {
        Question.find({})
            .then(questions => res.json(questions))
            .catch(err => {
                console.log("Question find ERROR", err)
                res.status(500).json(err)
            })
    }

}