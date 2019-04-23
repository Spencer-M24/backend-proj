// import

const db = require('../../data/databaseconfig');




module.exports = {
    locate,
    
    locateById,
    
    add,
    
    remove,
    
    update
}



function locate(){
    
    return db('rep')
}

function locateById(id) {
    
    return db('rep')
      
    .where({ id })
    




      .first();
  }

async function add(set){
    
    const [id] = await db('rep').insert(set);

    
    return db('rep').where({ id }).first()
}

function remove(id){
    

    return db('rep').where({ id }).del()
}

function update(id, changes){


    return db('rep').where({ id }).update(changes)
}