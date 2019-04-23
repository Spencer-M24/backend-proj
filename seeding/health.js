exports.seed = function(knex, Promise) {
    
    return knex('health').truncate()
    
    .then(function () {
    
        return knex('health').insert([
          
          
          { id: 1, name: 'Leg Day', date: "Januarary 3, 1999", user_id: 1 },
          
          { id: 2, name: 'arm bar', date: "Janurary 2, 1999", user_id: 1 },
        
          { id: 3, name: 'basketball', date: "Janurary 1, 1999", user_id: 1 },
       
          
          { id: 4, name: 'Dumbells', date: "Febuarary 01, 2000", user_id: 2 },
          
          { id: 5, name: 'Pullups', date: "Febuarary 02 2000", user_id: 2 },
          
          { id: 6, name: 'SQuats', date: "Febuarary 03 2000",  user_id: 2 },
          
          
          { id: 7, name: 'Push ups', date: "March 01, 2001", user_id: 3 },
          
          { id: 8, name: 'Walking', date: "March 01, 2001", user_id: 3 },
          
          { id: 9, name: 'Running', date: "March 01, 2001",  user_id: 3 }
        ]);
      });
  };