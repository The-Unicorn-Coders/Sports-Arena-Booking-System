// const UserModel = require("../models/User.model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const ENV = require("../config");

// async function register(req, res) {
//     try {
//         const { username, password, email } = req.body;

//         // Check for existing user
//         const existUsername = new Promise((resolve, reject) => {
//             UserModel.findOne({ username }, function (err, user) {
//                 if (err) reject(new Error(err));
//                 if (user) reject({ error: "Please use a unique username" });

//                 resolve();
//             });
//         });
//         const existEmail = new Promise((resolve, reject) => {
//             UserModel.findOne({ email }, function (err, user) {
//                 if (err) reject(new Error(err));
//                 if (user) reject({ error: "Please use a unique email" });

//                 resolve();
//             });
//         });

//         Promise.all([existUsername, existEmail])
//             .then(() => {
//                 if (password) {
//                     bcrypt
//                         .hash(password, 10)
//                         .then((hashedPassword) => {
//                             const user = new UserModel({
//                                 username,
//                                 password: hashedPassword,
//                                 email,
//                             });

//                             user
//                                 .save()
//                                 .then(() =>
//                                     res.status(201).send({ msg: "Registration is done" })
//                                 )
//                                 .catch((error) => res.status(500).send({ error }));
//                         })
//                         .catch((error) => {
//                             return res
//                                 .status(500)
//                                 .send({ error: "Unable to hash the password" });
//                         });
//                 }
//             })
//             .catch((error) => {
//                 return res.status(500).send({
//                     error: "An error occurred while checking existing user",
//                 });
//             });
//     } catch (error) {
//         return res.status(500).send({ error });
//     }
// }

// async function login(req, res) {
//     const { username, password } = req.body;

//     try {
//         UserModel.findOne({ username })
//             .then((user) => {
//                 bcrypt
//                     .compare(password, user.password)
//                     .then((passwordCheck) => {
//                         if (!passwordCheck)
//                             return res.status(400).send({ error: "Invalid password" });

//                         // Create JWT token
//                         const token = jwt.sign(
//                             {
//                                 userId: user._id,
//                                 username: user.username,
//                             },
//                             ENV.JWT_SECRET,
//                             { expiresIn: "24h" }
//                         );

//                         return res.status(200).send({
//                             msg: "Login successful",
//                             username: user.username,
//                             token,
//                         });
//                     })
//                     .catch((error) => {
//                         return res
//                             .status(400)
//                             .send({ error: "Incorrect password provided" });
//                     });
//             })
//             .catch((error) => {
//                 return res.status(404).send({ error: "Username not found" });
//             });
//     } catch (error) {
//         return res.status(500).send({ error });
//     }
// }

// async function getUser(req, res) {
//     const { username } = req.params;

//     try {
//         if (!username)
//             return res.status(501).send({ error: "Invalid username" });

//         UserModel.findOne({ username