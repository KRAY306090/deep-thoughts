const router = require('express').Router();

const {
    addThought
} = require('../../controllers/thought-controllers');

router
    .route('/')
    .post(addThought);


module.exports = router;