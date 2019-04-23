exports


= function(knex, Promise) {

  return knex('training').truncate()

    .then(function () {





        return knex('training').insert([
          


         { id: 1, name: 'walking', training_id: 1 },
          
          { id: 2, name: 'Squats',  training_id: 1 },

          { id: 3, name: 'running',  training_id: 1 },
          


          { id: 4, name: 'walking ', training_id: 2 },

          { id: 5, name: 'Arm Bar', training_id: 2 },

          { id: 6, name: 'Squads',  training_id: 2 },
          


          { id: 7, name: 'Dumbell',  training_id: 3 },

          { id: 8, name: 'Walking', training_id: 3 },

          { id: 9, name: 'Bench-Press',  training_id: 3 },


          { id: 10, name: 'leg work',training_id: 4 },
          
          { id: 11, name: 'Squats',  training_id: 4 },
          
          { id: 12, name: 'bench-press', training_id: 4 },
          


          { id: 13, name: 'Running', training_id: 5 },

          { id: 14, name: 'Dumbells',  training_id: 5 },

          { id: 15, name: 'Push-Ups',  training_id: 5 },
          


          { id: 16, name: 'dumbless', training_id: 6 },

          { id: 17, name: 'bench-press', training_id: 6 },

          { id: 18, name: 'Pull-Ups', training_id: 6 },
          

         
          { id: 19, name: 'bench-press', training_id: 7 },
       
          { id: 20, name: 'Squats', training_id: 7 },
        
          { id: 21, name: 'Lunges',  training_id: 7 },
          

        
          { id: 22, name: 'Bench Press', training_id: 8 },
     
          { id: 23, name: 'Squats', training_id: 8 },
       
          { id: 24, name: 'Push-Ups', training_id: 8 },
          


          { id: 25, name: 'pushups', training_id: 9 },
         
          { id: 26, name: 'bench-press', training_id: 9 },
        
          { id: 27, name: 'push-ups', training_id: 9 },
        ]);
      });
  };