const db = require('../../data/dbConfig');

module.exports = {
    locate,
    add,
    update,
    remove,
    gettrainingHealthFitness,
    addHealthfitnessTraining
}

function locate(){
    
    
    return db('training')

}


async function add(traning){

    const [id] = 
    await db('trainings').insert(training);


    
    
    
    
    return db('trainigs')
    .where({ id })
    .first()
}




function addHealthandfintess
(healthandfitness){

    return db('healthandfitness')

    .insert({

        


        
        name: healthandfitness.name,
        
        targetArea: healthandfitness.targetArea,
        
        training_id: training_id
    })

}



function remove(id){
    return db('trainingss').where({ id }).del()
}

function update(id, changes) {
    


    
    return db('trainings')
    
    .where({ id })
    
    .update(changes);
  }


function gettraiingHealthfitness(trainingID){
    return db('healthandfitness')
        
    .join('trainings', 'trainingss.id', 'healthfitness.training_id')
 





        .select('healthandfitness.*')
 
        .where('healthfitnes.trainng_id', trainingID)
}