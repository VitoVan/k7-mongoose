'use strict';

const Mongoose = require('../../lib').mongoose();

const Schema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
});

const CandyModel = Mongoose.model('Candy', Schema);

module.exports = CandyModel;
