import {Router} from "express";
const route = Router();

import * as controller from '../controllers/appControllers.js';
/**POST Methods*/
route.route('/register').post(controller.register);
route.route('/registerMail').post();
route.route('/authenticate').post((req, res) => res.end());
route.route('/login').post(controller.login);

/**GET Methods*/
route.route('/user/:username').get(controller.getUser);
route.route('/generateOTP').get(controller.generateOTP);
route.route('/verifyOTP').get(controller.verifyOTP);
route.route('/createResetSession').get(controller.createResetSession);

/**PUT Methods*/
route.route('/updateUser').put(controller.updateUser);
route.route('/resetPassword').put(controller.resetPassword);
