const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.ststus(400).json(err);
            });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create a new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user fpound with this id!" })
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    //delete user 
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user found with this id" })
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    //add friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user with this id was found!' });
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //remove friend NEEDS WORK
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: { friendId: req.params.friendId } } },
            { runValidators: true, new: true }
        )
            .then(dbNotebookData => {
                if (!dbNotebookData) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                res.json(dbNotebookData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};

module.exports = userController;

