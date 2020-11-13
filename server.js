require('dotenv').config();

const express = require('express');
const methodOverride=require('method-override');
const app = express();
const routes = require('./routes')
const jwt =require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const constants = require('./constants');

const corsOptions = {
    // origin: ['http://localhost:3000'],
    origin: ['https://but-its-mine.surge.sh'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200 
}

app.options("*", cors(corsOptions))
app.use(cors(corsOptions))
app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if(token){
        token = token.substring(constants.BEARER_START_INDEX) 
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser){
            return res.status(constants.UNAUTHORIZED).send(`ERROR: ${err}`);
        }
        req.user = decodedUser;

        next();
    })
}

app.use('/auth', routes.auth);
app.use('/forum/posts/all', routes.post);
app.use('/auth/verify', verifyToken, routes.auth);
app.use('/forum/posts', verifyToken, routes.post);

app.listen(process.env.PORT, () => {
    console.log(`I am listening on  ${process.env.PORT}`);
})