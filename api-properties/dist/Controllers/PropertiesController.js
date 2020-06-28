"use strict";

var _PropertiesModel = require("../Models/PropertiesModel");

var _PropertiesModel2 = _interopRequireDefault(_PropertiesModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerProperties = {
    //Permite consultar las propiedades por su ID
    getproperties: async function getproperties(req, res) {
        //Validar si en react native funciona el envío de parametros por url
        try {
            var id = req.query.id;

            var property = await _PropertiesModel2.default.find({ _id: id });

            if (property) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: property,
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite agregar una nueva propiedad
    addproperty: async function addproperty(req, res) {
        try {
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
                    res: {
                        success: true,
                        data: [],
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite actualizar los datos de una propiedad
    updateproperty: async function updateproperty(req, res) {
        try {
            var _req$body2 = req.body,
                id = _req$body2.id,
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
                    res: {
                        success: true,
                        data: [],
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite eliminar una propiedad
    deleteproperty: async function deleteproperty(req, res) {
        try {
            var id = req.query.id;

            var result = await _PropertiesModel2.default.findByIdAndDelete(id);

            if (result) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Listar todas las propiedades
    listproperties: async function listproperties(req, res) {
        try {
            var properties = await _PropertiesModel2.default.find({});
            //const result = await propertiesModel.find({}).count();

            if (properties) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: properties,
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite filtrar las propiedades por usuario
    getpropertiesuser: async function getpropertiesuser(req, res) {
        //Validar si en react native funciona el envío de parametros por url
        try {
            var authorid = req.query.authorid;

            var properties = await _PropertiesModel2.default.find({ author: authorid });
            //const result = await propertiesModel.find({author: authorid}).count();

            if (properties) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: properties,
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite ordenar las propiedades por precio
    getstoredproperties: async function getstoredproperties(req, res) {
        try {
            var properties = await _PropertiesModel2.default.find().sort("price");
            //const result = await propertiesModel.find({}).count();

            if (properties) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: properties,
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    }
};

module.exports = controllerProperties;