import {Schema, model} from 'mongoose';

const CategorySchema = new Schema({
    name_category: {type: String, required: [true, "Category name required"], unique: true},
    date: {type: String, default: new Date().toLocaleDateString()},
});

module.exports = model("category",CategorySchema);