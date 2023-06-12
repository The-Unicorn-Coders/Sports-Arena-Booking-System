import {Router} from "express";
const route = Router();
import * as controller from '../controllers/appControllers.js';
import {registerMail} from "../controllers/mailer";
import Auth, {localVariables} from "../middlewear/auth.js";

/**POST Methods*/
route.route('/register').post(controller.register);
route.route('/registerMail').post(registerMail);
route.route('/authenticate').post((req, res) => res.end());
route.route('/login').post(controller.login);

/**GET Methods*/
route.route('/user/:username').get(controller.getUser);
route.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP);
route.route('/verifyOTP').get(controller.verifyOTP);
route.route('/createResetSession').get(controller.createResetSession);

/**PUT Methods*/
route.route('/updateUser').put(Auth, controller.updateUser);
route.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);
