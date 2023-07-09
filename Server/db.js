{/*const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const ENV = require("./config.js");

async function connect() {
    const mongodb = await MongoMemoryServer.create();
    const getUri = mongodb.getUri();

    mongoose.set("strictQuery", true);

    const db = await mongoose.connect(getUri || ENV.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("Database Connected");
    return db;
}

module.exports = connect;*/}
