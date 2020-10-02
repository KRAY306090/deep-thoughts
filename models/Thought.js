const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        max: [280, "Thought is too long"] 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;