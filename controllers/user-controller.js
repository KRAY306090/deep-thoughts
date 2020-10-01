const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers() {

    },

    // get one user by id
    getUserById() {

    },

    // create a new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // update user by id
    updateUser() {

    },

    //delete user 
    deleteUser() {

    }

};

module.exports = userController;

