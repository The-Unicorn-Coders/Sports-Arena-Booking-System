import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/route.js';
import connect from "./db.js";

const app = express();

/** middlewares */
app.use(express.json());
//app.use(cors());
app.use(
    cors({
        origin: ["http://localhost:3000"],      credentials: true,
    })
);
app.use(morgan('tiny'));
app.disable('x-powered-by');


const port = 8081;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})

