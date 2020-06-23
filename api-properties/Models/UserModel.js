import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name: {type: String, require},
    last_name: {type: String, require},
    email: {type: String, require},
    password: {type: String, require},
});

module.exports = model("user",UserSchema);