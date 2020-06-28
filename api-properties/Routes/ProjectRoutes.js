import express from 'express';
import controllerUser from '../Controllers/UserController';
import controllerProperties from '../Controllers/PropertiesController';
import controllerCategory from '../Controllers/CategoryController';

const router = express.Router();

//Routes user
router.get('/listusers', controllerUser.listusers);
router.get('/getuser', controllerUser.getuser);
router.get('/getuserexist', controllerUser.getuserexist);
router.post('/adduser', controllerUser.adduser);
router.put('/updateuser', controllerUser.updateuser);
router.delete('/deleteuser', controllerUser.deleteuser);
//Routes properties
router.get('/listproperties', controllerProperties.listproperties);
router.get('/getproperties', controllerProperties.getproperties);
router.post('/addproperty', controllerProperties.addproperty);
router.put('/updateproperty', controllerProperties.updateproperty);
router.delete('/deleteproperty', controllerProperties.deleteproperty);
router.get('/getpropertiesuser', controllerProperties.getpropertiesuser);
router.get('/getstoredproperties', controllerProperties.getstoredproperties);
//Routes categories
router.get('/listcategories', controllerCategory.listcategories);
router.post('/addcategory', controllerCategory.addcategory);
router.put('/updatecategory', controllerCategory.updatecategory);
router.delete('/deletecategory', controllerCategory.deletecategory);

module.exports = router;