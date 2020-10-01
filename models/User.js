const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: [true, "Please enter a username!"],
        trimmed: true
    },
    email: {
        type: String,
        required: [true, "Please enter an email!"],
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address!"]
    },
    // thoughts: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'thoughts'
    //     }
    // ],
    // friends: [
    //     {}
    // ]

},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }

);

const User = model('User', UserSchema);

module.exports = User;