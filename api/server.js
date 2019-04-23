// Imports


const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const { authenticate } = require('../helpers/auth/auth');



const server = express();



const authRouter = require('../helpers/00-auth/auth-router')

const repRouter = require('../helpers/rep/rep_router');

const healthRouter = require('../helpers/health/health_routes');

const trainingRouter = require('../helpers/trainging/traing_routes');

const peopleRouter = require('../helpers/people/people-routes');








server.use(express.json());

server.use(helmet());

server.use(cors());


server.use('/auth', authRouter);

server.use('/people', peopleRouter);

server.use('/health', healthRouter);

server.use('/training', traingingRouter);

server.use('/reps', repRouter);



server.get('/', (req, res) => {

    res.send("test")

});

// export


module.exports = server;

