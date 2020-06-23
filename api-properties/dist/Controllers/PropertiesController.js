"use strict";

var _PropertiesModel = require("../Models/PropertiesModel");

var _PropertiesModel2 = _interopRequireDefault(_PropertiesModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerProperties = {
    getproperties: async function getproperties(req, res) {
        //Validar si en react native funciona el envío de parametros por url
        var id = req.query.id;

        var property = await _PropertiesModel2.default.find({ _id: id });
        if (property) {
            return res.status(200).json({ property: property });
        } else {
            return res.status(404).json({
                response: "The property could not be found."
            });
        }
    },
    addproperty: async function addproperty(req, res) {
        var _req$body = req.body,
            title = _req$body.title,
            type = _req$body.type,
            address = _req$body.address,
            rooms = _req$body.rooms,
            price = _req$body.price,
            area = _req$body.area,
            image = _req$body.image,
            author = _req$body.author;

        var newProperty = new _PropertiesModel2.default({ title: title, type: type, address: address, rooms: rooms, price: price, area: area, image: image, author: author });

        var result = await newProperty.save();

        if (result) {
            return res.status(200).json({
                response: "Successfully added property."
            });
        } else {
            return res.status(404).json({
                response: "The property could not be added."
            });
        }
    },
    updateproperty: async function updateproperty(req, res) {
        var id = req.query.id;
        var _req$body2 = req.body,
            title = _req$body2.title,
            type = _req$body2.type,
            address = _req$body2.address,
            rooms = _req$body2.rooms,
            price = _req$body2.price,
            area = _req$body2.area,
            image = _req$body2.image,
            author = _req$body2.author;


        var result = await _PropertiesModel2.default.findByIdAndUpdate(id, { title: title, type: type, address: address, rooms: rooms, price: price, area: area, image: image, author: author });

        if (result) {
            return res.status(200).json({
                response: "Property updated successfully."
            });
        } else {
            return res.status(404).json({
                response: "The property could not be updated."
            });
        }
    },
    deleteproperty: async function deleteproperty(req, res) {
        var id = req.query.id;

        var result = await _PropertiesModel2.default.findByIdAndDelete(id);

        if (result) {
            return res.status(200).json({
                response: "Successfully deleted property."
            });
        } else {
            return res.status(404).json({
                response: "The property could not be deleted."
            });
        }
    },
    //Listar todas la propiedades
    listproperties: async function listproperties(req, res) {
        var properties = await _PropertiesModel2.default.find({});

        var result = await _PropertiesModel2.default.find({}).count();
        if (result > 0) {
            return res.status(200).json({ properties: properties });
        } else {
            return res.status(404).json({
                response: "No registered properties."
            });
        }
    },
    //Filtrar propiedades por usuario
    getpropertiesuser: async function getpropertiesuser(req, res) {
        //Validar si en react native funciona el envío de parametros por url
        var authorid = req.query.authorid;

        var properties = await _PropertiesModel2.default.find({ author: authorid });
        var result = await _PropertiesModel2.default.find({ author: authorid }).count();
        if (result > 0) {
            return res.status(200).json({ properties: properties });
        } else {
            return res.status(404).json({
                response: "The properties could not be found."
            });
        }
    },
    //Ordenar propiedades por precio
    getstoredproperties: async function getstoredproperties(req, res) {
        var properties = await _PropertiesModel2.default.find().sort("price");

        var result = await _PropertiesModel2.default.find({}).count();
        if (result > 0) {
            return res.status(200).json({ properties: properties });
        } else {
            return res.status(404).json({
                response: "No registered properties."
            });
        }
    }
};

module.exports = controllerProperties;