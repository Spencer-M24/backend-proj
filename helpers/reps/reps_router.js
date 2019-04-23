// Start imports moduels


router = require('express').Router();

const Reps = require('./rep-model');



// Get
router.get('/', async (req, res) => {
    try{
      
        reps = await Reps.find();

        res.status(200).json(reps);
    } 
    catch(error){
    
        res.status(500).json(error);
    
    }
})


// Get

router.get('/:id', async (req, res) => {
    try{

        rep = await Reps.findById(req.params.id)

        if(rep){

            res.status(200).json(rep)

        } else {

            res.status(404).send('error')

        }

    } catch(error){
        res.status(500).json(error)
    }

})


// Post
router.post('/', async (req, res) => {

    try{

        rep = await Reps.add(req.body)

        res.status(200).json(rep)

    } catch(error){
        res.status(500).json(error)

    }

})


// Remove

router.remove('/:id', async (req, res) => {

    try{

        count  = await Reps.remove(req.params.id)

        if(count > 0){

            res.status(200).json('error')

        } else {

            res.status(401).json('error')

        }

    } catch(error){

        res.status(500).json(error)

    }


})


// Put
router.put('/:id', async (req, res) => {

    try {

        rep = await Reps.update(req.params.id, req.body)
        if(rep){

            res.status(200).json(rep)

        } else {

            res.status(500).json(error)

        }

        

    } catch(error){
    
        res.status(500).json(error)
    
    }
})



module.exports = router;