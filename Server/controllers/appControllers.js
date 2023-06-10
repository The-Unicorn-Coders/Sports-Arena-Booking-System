import UserModel from "../models/User.model";
import bcrypt from 'bcrypt';
import {Jwt} from 'jsonwebtoken';
import ENV from '../config.js';


export async function register(req,res){
    try {
        const { username, password, email } = req.body;

        //check the existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username}, function (err, user){
                if (err) reject(new Error(err))
                if (user) reject({error: "Please use unique username"});

                resolve();
            })
        });
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email}, function (err, email){
                if (err) reject(new Error(err))
                if (email) reject({error: "Please use unique email"});

                resolve();
            })
        });

        Promise.all([existUsername, existEmail])
            .then(() => {
                if(password){
                    bcrypt.hash(password, 10)
                        .then(hashedPassword => {

                        const user = UserModel({
                            username,
                            password: hashedPassword,
                            email,
                        });
                        //return save results as a response
                        user.save()
                            .then(results => res.status(201).send({msg: "Registration is done"}))
                            .catch(error => res.status(500).send({error}))
                    })
                }

            }).catch(error => {
                return res.status(500).send({
                    error: "Enable to hashed password"
                })
        })


    }catch (error){
        return res.status(500).send(error);
    }
}

export async function login(req,res){

    const { username, password } = req.body;

    try {
        UserModel.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if (!passwordCheck) return res.status(400).send({error: "Don't have password"})

                        //create jwt token
                        jwt.sign({
                            userId: user_id,
                            username: user.username,

                        }, ENV.JWT_SECRET, {expiresIn: "24h"});
                        return res.status(200).send({
                            msg: "Login successfull",
                            username: user.username,
                            token

                        })
                    })
                    .catch(error => {
                        return res.status(400).send({error: " Incorrect password"});
                    })
            })
            .catch(error => {
                return res.status(404).send({error: " Username not found"});
            })
    }catch (error){
        return res.status(500).send({error});
    }
}

export async function getUser(req,res){

    const { username } = req.params;

    try {
        if(!username) return res.status(501).send({ error: "Invalid username"});

        UserModel.findOne({username}, function(err, user){
            if(err) return res.status(500).send({err});
            if(!user) return res.status(501).send({error: "Could not find the user"});

            /**remove password from user*/
            /**mongoose return unnecessary data with object to convert it into json*/
            const {password, ...rest} = Object.assign({}, user.toJSON);

            return res.status(201).send(rest);

        })
        }catch (error){
        return res.status(404).send({error: "Cannot find user data"});

    }
}

export async function updateUser(req,res){
    try {
        const id = req.query.id;

        if (id){
            const body = req.body;

            //update user data
            UserModel.updateOne({ _id : id}, body, function (err,data){
                if (err) throw err;

                return res.status(201).send({msg: "Record updated!"});
            })
        }else {
            return res.status(401).send({error: "User not found!"});
        }

    }catch (error){
        return res.status(401).send({error})
    }
}

export async function generateOTP(req,res){

}

export async function verifyOTP(req,res){
    res.json('verifyOTP route');
}

export async function createResetSession(req,res){
    res.json('createResetSession route');
}

export async function resetPassword(req,res){
    res.json('resetPassword route');
}
