"use strict";

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
    name: { type: String, require: require },
    last_name: { type: String, require: require },
    email: { type: String, require: require },
    password: { type: String, require: require }
});

module.exports = (0, _mongoose.model)("user", UserSchema);