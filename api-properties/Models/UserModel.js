import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name: {type: String, required: [true, "User name required"]},
    last_name: {type: String, required: [true, "Last name required"]},
    email: {type: String, required: [true, " Email required"], unique: true, lowercase: true},
    password: {type: String, required: [true, "Password required"]},
    date: {type: String, default: new Date().toLocaleDateString()},
});

module.exports = model("user",UserSchema);