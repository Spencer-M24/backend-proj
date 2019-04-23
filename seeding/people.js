



exports = function(knex, Promise) {
 

    
 
    return knex('users').truncate()
     
    

    
    .then(function () {
    
        return knex('users').insert([
          {
    
            id: 1, 
    
            fullname: 'Name1 LastName2', 
         
    
            
            
            email: "namelastname1@example.com", 
            
            username: 'userpass1', 
        
            
            password: "2.&p]x]D^h#WbSWCF[",

            
          
            height: 0,
         
            weight: 100
          },
          
          
          {
            id: 2, 
         
            fullname: 'Name2 LastName2', 
         
            email: "lastnamefirstname2@example.com", 

          
            
            username: 'userpass2', 
            
            password: "L4qgP'?qW&+zRW",
            
            height: 2,
           
           
            weight: 200
          },
  
          {
            id: 3, 
           
            fullname: 'first3last3', 
           
            email: "firstlast3@example.com", 
           

            username: 'firstname3last3', 
           
            password: "t=y&GP-3W_7!cs!ysF",
            
            height: 3,
           
            weight: 300
          }
        ]);
      });
  };
  