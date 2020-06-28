import {Schema, model} from 'mongoose';

const PropertiesSchema = new Schema({
    title: {type: String, required: [true, "Title required"]},
    type: {type: String, required: [true, "Type required"]},
    address: {type: String, required: [true, "Address required"]},
    rooms: {type: Number, required: [true, "Rooms required"]},
    price: {type: Number, required: [true, "Price required"]},
    area: {type: Number, required: [true, "Area required"]},
    image: {type: String, required: [true, "Image required"]},
    author: {type: String, required: [true, "Author required"]},
    date: {type: String, default: new Date().toLocaleDateString()},
});

module.exports = model("properties",PropertiesSchema);