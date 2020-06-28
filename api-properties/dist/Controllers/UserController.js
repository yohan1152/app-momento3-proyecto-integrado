'use strict';

var _UserModel = require('../Models/UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerUser = {
    //Permite validar si un usuario existe en la BD
    getuserexist: async function getuserexist(req, res) {
        try {
            var email = req.body.email;


            var userexist = await _UserModel2.default.find({ email: email }).count();

            if (userexist > 0) {
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
            } else {
                return res.status(404).json({
                    res: {
                        success: false,
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
    //Permite buscar un usuario en la BD y trae los datos para almacenar en la variable de session
    getuser: async function getuser(req, res) {
        try {
            var _req$body = req.body,
                email = _req$body.email,
                password = _req$body.password;


            var userlogin = await _UserModel2.default.find({ email: email, password: password });
            var result = await _UserModel2.default.find({ email: email, password: password }).count();

            if (result > 0) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: userlogin,
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            } else {
                return res.status(404).json({
                    res: {
                        success: false,
                        data: [],
                        error: {
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.json({
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
    //Permite registrar un nuevo usuario
    adduser: async function adduser(req, res) {
        try {
            var _req$body2 = req.body,
                name = _req$body2.name,
                last_name = _req$body2.last_name,
                email = _req$body2.email,
                password = _req$body2.password;


            var newUser = new _UserModel2.default({ name: name, last_name: last_name, email: email, password: password });
            var result = await newUser.save();

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
    //Permite actualizar un usuario
    updateuser: async function updateuser(req, res) {
        try {
            var _req$body3 = req.body,
                id = _req$body3.id,
                name = _req$body3.name,
                last_name = _req$body3.last_name,
                email = _req$body3.email,
                password = _req$body3.password;

            var result = await _UserModel2.default.findByIdAndUpdate(id, { name: name, last_name: last_name, email: email, password: password });

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
    //Permite eliminar un usuario
    deleteuser: async function deleteuser(req, res) {
        try {
            var id = req.query.id;

            var result = await _UserModel2.default.findByIdAndDelete(id);

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
    //Permite listar todos los usuarios
    listusers: async function listusers(req, res) {
        try {
            var users = await _UserModel2.default.find({});
            //const result = await userModel.find({}).count();

            if (users) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: users,
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

module.exports = controllerUser;