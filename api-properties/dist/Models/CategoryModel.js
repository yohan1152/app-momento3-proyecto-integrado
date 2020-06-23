"use strict";

var _mongoose = require("mongoose");

var CategorySchema = new _mongoose.Schema({
    name_category: { type: String, require: require }
});

module.exports = (0, _mongoose.model)("category", CategorySchema);