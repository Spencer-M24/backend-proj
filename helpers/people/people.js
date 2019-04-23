const db = require("../../data/dbConfig");

module.exports = {
    add,

    locate,
    
    recieve,
    

    
    locateById,
    
    remove,
    
    


};

function locate() {
    
    return db("users");
}

function recieve(select) {


    return db("people")
        .where(select)

        
        .first();


    }


function locateById(id) {
    return db("people")
        
    .where({ id })
    

        .first();
}

async function add(user) {

    const [id] = await db("people").insert(user);

    return db("people")


    .where({ id })

    .first();
}

function remove(id) {
    
    return db("people")
        .where({ id })
    
        .del();
}


