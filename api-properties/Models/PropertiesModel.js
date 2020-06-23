import {Schema, model} from 'mongoose';

const PropertiesSchema = new Schema({
    title: {type: String, require},
    type: {type: String, require},
    address: {type: String, require},
    rooms: {type: Number, require},
    price: {type: Number, require},
    area: {type: Number, require},
    image: {type: String, require},
    author: {type: String, require},
});

module.exports = model("properties",PropertiesSchema);