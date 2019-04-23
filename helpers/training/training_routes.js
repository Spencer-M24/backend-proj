
// Import start

const Trainings = require('./training');


router = require('express').Router();


router.get('/', async (req, res) => {

    try{

        trainings = await Trainings.find();

        res.status(200).json(trainings);

    } catch(error){

        res.status(500).json(error);

    }

})
// Getting
router.get('/:id', async (req, res) => {
    try{
        training = await Trainings.findById(req.params.id)
        
        if(training){
        
            res.status(200).json(training)
        
        } else {
        
            res.status(404).send('error')
        
        }
    } catch(error){
    
        res.status(500).json(error)
    
    }
})


// Post Req
router.post('/', async (req, res) => {
    try{
        training = await Trainings.add(req.body);
        
        res.status(200).json(training);
    } catch(error){
    
        res.status(500).json(error)
    
    }
})



router.post('/:training_id/reps', async (req, res) => {
    try{
        
        const id = 
        Number(req.params.trainings_id)



        const set = await Trainingss.addRepsToTrainings({ reps:
             req.body.reps, 
             heavy: 
             req.body.weight, 
             health_id: id })

        if(set){
        
            res.status(200).json(set)

        } else {

            res.status(404).send('error')

        }

    } catch(error){

        res.status(500).json(error);

    }

})
// Removing
router.delete('/:id', async (req, res) => {

    try{
        count = await Trainingss.destroy(req.params.id);
        if(count > 0){

            res.status(200).json('remove')

        } else {

            res.status(401).json('error')

        }


    } catch(error){

        res.status(500).json(error)

    }

})


// Recive
router.get('/:Training_id/reps/', async (req, res) => {

    try{
        let reps = await Trainings.getTrainingReps(req.params.training_id)

        if(reps){


            res.status(200).json(reps)

        } else {

            res.status(404).send('error')

        }

    } catch(error){

        res.status(500).json(error)

    }
})

// Puts
router.put('/:id', async (req, res) => {

    try{

        let training = await Trainings.update(req.params.id, req.body)

        if(training){


            res.status(200).json(training)

        } else {
            res.status(404).json('')


        }

    } catch(training) {

        res.status(500).json(error)

    }

});


// out
module.exports = router;