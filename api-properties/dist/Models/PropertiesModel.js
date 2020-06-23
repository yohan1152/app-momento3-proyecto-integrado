"use strict";

var _mongoose = require("mongoose");

var PropertiesSchema = new _mongoose.Schema({
    title: { type: String, require: require },
    type: { type: String, require: require },
    address: { type: String, require: require },
    rooms: { type: Number, require: require },
    price: { type: Number, require: require },
    area: { type: Number, require: require },
    image: { type: String, require: require },
    author: { type: String, require: require }
});

module.exports = (0, _mongoose.model)("properties", PropertiesSchema);