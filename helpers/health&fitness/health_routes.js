// Routes soon


router = require('express').Router();

const Healths = require('./health');



router.get('/', async (req, res) => {

    try{

        health = await Health.find();

        res.status(200).json(health);

    } catch(error){

        res.status(500).json(error);

    }

})



router.get('/:id', async (req, res) => {


    try{

        health = await Health.findById(req.params.id)

        if(health){
            res.status(200).json(health)
        } else {

            res.status(404).send('error')

        }

    } catch(error){

        res.status(500).json(error)


    }

})

router.post('/', async (req, res) => {
    try{

        health = await Health.add(req.body)

        res.status(200).json(health)

    } catch(error){

        res.status(500).json(error)

    }
})

rout
er.delete('/:id', async (req, res) => {
    try{

        count = await Healths.destroy(req.params.id)

        if(count > 0){

            res.status(200).json('error')

        } else {

            res.status(401).json('error')

        }

    } catch(error){

        res.status(500).json(error)
    }
})

router.get('/:health_id/training/', async (req, res) => {
    try
    {
        let healths = await Health.getHealthTraining(req.params.health_id)
       
        if(healths){
            
            res.status(200).json(healths)
   
   




        } else {
   
            res.status(404).send('error')
        }
   
    } catch(error){
   
        res.status(500).json(error)
   
    }
})

router.post('/:health_id/healths', async (req, res) => {
    try{
       
        const health = await Health.addTrainingToHealth({ 
            name: 
        
        
            req.body.name, 
            


            health_id: 
        
        
            req.params.health_id})
       
            if(health){
           
        
            res.status(200).json(health)
        } else {
          
            res.status(404).send('error')
        }
    } catch(error){
        
        res.status(500).json(error);
    }
})

// Put

router.put('/:id', async (req, res) => {
    try{
    
        let health = await Healths.update(req.params.id, req.body)
    
        if(health){
    
            res.status(200).json(health)
    
        } else {
    
            res.status(404).json('error')
    
        }
    
    
    }catch(error){
    
        res.status(500).json(error);
    
    }
})
// Out
module.exports = router;