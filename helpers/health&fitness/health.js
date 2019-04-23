
const db = require('../../data/dbConfig');

module.exports = {
    
    find,
    
    add,
    
    

    update,
    

    destroy,
    

    getHealthTraining,
    
    addHealthToTraining
}

function find(){
    
    return db('trainings')
}

async function add(training){
    
    const [id] = await db('trainings').insert(training);

    return db('trainings').where({ id }).first()
}

function addHealthToTraining(health){
    
    return db('healths')
    
    .insert({
        
        name: health.name,
        targetArea: health.targetArea,
        


        training_id: health.trainings_id
 




    })
}


function destroy(id){
 
 
    return db('traings').where({ id }).del()
}

function update(id, changes) {
    return db('trainings')
      
    .where({ id })
    





      .update(changes);
  }

function getTrainingHealth(trainingID){
    
    
    return db('health')
        
    .join('traings', 'training.id', 'health.training_id')
        
        .select('healths.*')
        
        .where('health.training_id', trainingID)
}