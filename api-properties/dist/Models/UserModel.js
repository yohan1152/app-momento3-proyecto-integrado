"use strict";

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
    name: { type: String, required: [true, "User name required"] },
    last_name: { type: String, required: [true, "Last name required"] },
    email: { type: String, required: [true, " Email required"], unique: true, lowercase: true },
    password: { type: String, required: [true, "Password required"] },
    date: { type: String, default: new Date().toLocaleDateString() }
});

module.exports = (0, _mongoose.model)("user", UserSchema);