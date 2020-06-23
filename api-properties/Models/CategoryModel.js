import {Schema, model} from 'mongoose';

const CategorySchema = new Schema({
    name_category: {type: String, require},
});

module.exports = model("category",CategorySchema);