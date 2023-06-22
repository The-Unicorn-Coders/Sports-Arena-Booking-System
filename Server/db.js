import mongoose from "mongoose";

mongoose.connect('mongodb+srv://user:123@cluster0.styvg5e.mongodb.net/ArenaDB?retryWrites=true&w=majority/Arena',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
mongoose.Promise=global.Promise;

import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from "./config.js";


async function connect(){

    const mongodb = await MongoMemoryServer.create();
    const getUri = mongodb.getUri();

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(ENV.ATLAS_URI);
    console.log("Database Connected")
    return db;
}

export default connect;