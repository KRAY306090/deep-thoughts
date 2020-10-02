const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts() {

    },

    //get thought by id
    getThoughtById() {

    },

    // add thought to user
    addThought({ body }, res) {
        console.log(body);
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId},
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No User found with this id!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // update a thought
    updateThought() {

    },

    // remove thought
    removeThought() {

    }

};

module.exports = thoughtController;