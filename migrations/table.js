exports = function(knex, Promise) {
    
    
    return knex.schema.createTable('users', (tbl) => {
  
        tbl.increments();

        tbl.string('e-mail', 255)
       
        tbl.string('Name', 255)
       
        
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
           
           tbl.integer('how tall', 255).notNullable()
           
           tbl.integer('limit', 255).notNullable()
       
           tbl.string('pass', 255).notNullable()
  
    })
  
    .createTable('health', (tbl) => {

        tbl.increments();

        tbl
       
        .string('name', 255)
       
        .notNullable() 
        
        tbl.date('calander', 255)

        tbl.integer('user_id').notNullable()
       
        .unsigned()
       
            .references('id')
       
            .inTable('users')
       
            .onDelete('CASCADE')
       
            .onUpdate('CASCADE') 
    })
  
    .createTable('health', (tbl) => {

        tbl.increments()
        
        tbl
            .string('name', 255)
            .notNullable() 

        tbl
            .string('targetArea', 255)
            .notNullable()

        tbl
            .integer('training_id').notNullable()
            
            .unsigned()
            
            .references('id')
            
            .inTable('trainings')
            
            .onDelete('CASCADE')
            
            .onUpdate('CASCADE') 
    })
  

    // Make Table
    .createTable('reps', (tbl) => {

        tbl
        .increments()
        
        tbl
        
    .integer('reps')
        
        
            .notNullable() 

        tbl
            
        .integer('weight')
        
        .notNullable() 
       
        tbl
            .integer('health_id').notNullable()
            
            .unsigned()
            
            .references('id')
            
            .inTable('health')
    

            
            .onDelete('CASCADE')
            
            .onUpdate('CASCADE') 
    })
  };
  
  exports = function(knex, Promise) {
      
    return knex.schema
            
        .dropTableIfExists('people')
            

            .dropTableIfExists('health')
    


            .dropTableIfExists('training')
    
            .dropTableIfExists('reps')
  };