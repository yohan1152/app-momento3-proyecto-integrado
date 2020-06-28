"use strict";

var _mongoose = require("mongoose");

var CategorySchema = new _mongoose.Schema({
    name_category: { type: String, required: [true, "Category name required"], unique: true },
    date: { type: String, default: new Date().toLocaleDateString() }
});

module.exports = (0, _mongoose.model)("category", CategorySchema);