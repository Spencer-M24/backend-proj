const router = require('express').Router();

const People = require('../people/people');

const database = require('../../data/databaseconfig.js')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

const { generateToken } = require('./token');

// Registaiton

router.post('/register', async (req, res) => {
    try {
        
        
        
        let user = req.body;
        
        if(user.username && user.password){
            
            const hash = bcrypt.hashSync(user.password, 25);
            
            user.password = hash;
            
            
            let keep = await Users.add(user)
            
            res.status(201).json(keep)
        } else {
            
            res.status(404).send("")
        }
    } catch(error){
        
        res.status(500).json(error)
    }
});

// Login Part

router.post('/login', async (req, res) => {

    try{
        const {username, password } = req.body
        
        user = await Users.getBy({ username });
        
        
        if(user && bcrypt.compareSync(password, user.password)){
        
            const token = generateToken(user);
        
            
            
            res.status(200).json({ message: `token 
            

            
            ${user.username}`, 
            
            token, user_id: user.id });



        } else {
        
            
            
            res.status(401).json({ message: 'error' })
        }



    } catch(error){
        res.status(500).json(error)

    }
})


// Auth Part post


router.post('/auth', (req, res) => {
    
    let token = req.body.token;


    jwt.verify(token, secret, error => {

        if(error){

            res.send(false)


        } else {

            res.send(true)

        }

    })
})

// out

module.exports = router;