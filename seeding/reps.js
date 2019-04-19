

exports  = function(knex, Promise) {
    return knex('sets').truncate()

    .then(function () {
                return knex('sets').insert([
        
        
        
        
                    {id: 1, reps: 10, weight: 200, exercise_id: 1},
        
                    {id: 2, reps: 10, weight: 200, exercise_id: 1},
        
                    {id: 3, reps: 10, weight: 200, exercise_id: 1},
        
                    {id: 4, reps: 10, weight: 200, exercise_id: 1},
        
                    {id: 5, reps: 10, weight: 200, exercise_id: 1},
        
        
                    {id: 6, reps: 20, weight: 90, exercise_id: 2},
        
                    {id: 7, reps: 20, weight: 90, exercise_id: 2},
        
                    {id: 8, reps: 20, weight: 90, exercise_id: 2},
        
                    {id: 9, reps: 20, weight: 90, exercise_id: 2},
        
                    {id: 10, reps: 20, weight: 90, exercise_id: 2},
        
        
                    {id: 11, reps: 30, weight: 150, exercise_id: 3},
        
                    {id: 12, reps: 30, weight: 150, exercise_id: 3},
        
                    {id: 13, reps: 30, weight: 150, exercise_id: 3},
        
                    {id: 14, reps: 30, weight: 150, exercise_id: 3},
        
                    {id: 15, reps: 30, weight: 150, exercise_id: 3},
        
        
                    {id: 16, reps: 5, weight: 110, exercise_id: 4},
        
                    {id: 17, reps: 5, weight: 110, exercise_id: 4},
        
                    {id: 18, reps: 5, weight: 110, exercise_id: 4},
        
                    {id: 19, reps: 5, weight: 110, exercise_id: 4},
        
                    {id: 20, reps: 5, weight: 110, exercise_id: 4},
        
        
        
                    {id: 21, reps: 25, weight: 45, exercise_id: 5},
        
                    {id: 22, reps: 25, weight: 45, exercise_id: 5},
        
                    {id: 23, reps: 25, weight: 45, exercise_id: 5},
        
                    {id: 24, reps: 25, weight: 45, exercise_id: 5},
        
                    {id: 25, reps: 25, weight: 45, exercise_id: 5},
        
        
        
        
                    {id: 26, reps: 50, weight: 0, exercise_id: 6},
        
                    {id: 27, reps: 50, weight: 0, exercise_id: 6},
        
                    {id: 28, reps: 50, weight: 0, exercise_id: 6},
        
                    {id: 29, reps: 50, weight: 0, exercise_id: 6},
        
                    {id: 30, reps: 50, weight: 0, exercise_id: 6},
        
        
                    {id: 31, reps: 10, weight: 35, exercise_id: 7},
        
        
                    {id: 32, reps: 10, weight: 35, exercise_id: 7},
        
                    {id: 33, reps: 10, weight: 35, exercise_id: 7},
        
                    {id: 34, reps: 10, weight: 35, exercise_id: 7},
        
                    {id: 35, reps: 10, weight: 35, exercise_id: 7},
        
        
        
                    {id: 36, reps: 10, weight: 100, exercise_id: 8},
        
        
                    {id: 37, reps: 10, weight: 100, exercise_id: 8},
        
                    {id: 38, reps: 10, weight: 100, exercise_id: 8},
        
                    {id: 39, reps: 10, weight: 100, exercise_id: 8},
        
                    {id: 40, reps: 10, weight: 100, exercise_id: 8},
        
        
        
                    {id: 41, reps: 5, weight: 45, exercise_id: 9},
        
                    {id: 42, reps: 5, weight: 45, exercise_id: 9},
        
                    {id: 43, reps: 5, weight: 45, exercise_id: 9},
        
                    {id: 44, reps: 5, weight: 45, exercise_id: 9},
        
                    {id: 45, reps: 5, weight: 45, exercise_id: 9},
        
                   {id: 46, reps: 50, weight: 200, exercise_id: 10},
        
                   {id: 47, reps: 50, weight: 200, exercise_id: 10},
        
                   {id: 48, reps: 50, weight: 200, exercise_id: 10},
        
        
                   {id: 49, reps: 50, weight: 200, exercise_id: 10},
        
           {id: 50, reps: 50, weight: 200, exercise_id: 10},


           {id: 51, reps: 15, weight: 150, exercise_id: 11},

           {id: 52, reps: 15, weight: 150, exercise_id: 11},

           {id: 53, reps: 15, weight: 150, exercise_id: 11},

           {id: 54, reps: 15, weight: 150, exercise_id: 11},

           {id: 55, reps: 15, weight: 150, exercise_id: 11},


           {id: 56, reps: 20, weight: 150, exercise_id: 12},

           {id: 57, reps: 20, weight: 150, exercise_id: 12},
      
           {id: 58, reps: 20, weight: 150, exercise_id: 12},
      
      
           {id: 59, reps: 20, weight: 150, exercise_id: 12},
      
           {id: 60, reps: 20, weight: 150, exercise_id: 12},
      
           {id: 61, reps: 10, weight: 110, exercise_id: 13},
      
           {id: 62, reps: 10, weight: 110, exercise_id: 13},
      
           {id: 63, reps: 10, weight: 110, exercise_id: 13},
      
      
           {id: 64, reps: 10, weight: 110, exercise_id: 13},
      
           {id: 65, reps: 10, weight: 110, exercise_id: 13},


           {id: 66, reps: 25, weight: 45, exercise_id: 14},
           
           {id: 67, reps: 25, weight: 45, exercise_id: 14},
           
           {id: 68, reps: 25, weight: 45, exercise_id: 14},
           
           {id: 69, reps: 25, weight: 45, exercise_id: 14},
           
           {id: 70, reps: 25, weight: 45, exercise_id: 14},
           
           {id: 71, reps: 50, weight: 0, exercise_id: 15},
           
           
           {id: 72, reps: 50, weight: 0, exercise_id: 15},
           {id: 73, reps: 50, weight: 0, exercise_id: 15},
           
           {id: 74, reps: 50, weight: 0, exercise_id: 15},
           
           {id: 75, reps: 50, weight: 0, exercise_id: 15},
           
           
           
           
           {id: 76, reps: 10, weight: 35, exercise_id: 16},
           
           {id: 77, reps: 10, weight: 35, exercise_id: 16},
           
           {id: 78, reps: 10, weight: 35, exercise_id: 16},
           
           {id: 79, reps: 10, weight: 35, exercise_id: 16},
           
           {id: 80, reps: 10, weight: 35, exercise_id: 16},
           
           
           
           
           
           {id: 81, reps: 10, weight: 100, exercise_id: 17},
           {id: 82, reps: 10, weight: 100, exercise_id: 17},
           
           {id: 83, reps: 10, weight: 100, exercise_id: 17},
           
           
           {id: 84, reps: 10, weight: 100, exercise_id: 17},
           
           {id: 85, reps: 10, weight: 100, exercise_id: 17},
           
           
           
           {id: 86, reps: 5, weight: 45, exercise_id: 18},
           
           {id: 87, reps: 5, weight: 45, exercise_id: 18},
           
           {id: 89, reps: 5, weight: 45, exercise_id: 18},
           
           {id: 90, reps: 5, weight: 45, exercise_id: 18},
           
           
           {id: 91, reps: 50, weight: 200, exercise_id: 19},
           
           {id: 92, reps: 50, weight: 200, exercise_id: 19},
           
           {id: 93, reps: 50, weight: 200, exercise_id: 19},
           {id: 94, reps: 50, weight: 200, exercise_id: 19},
           
           
           {id: 95, reps: 50, weight: 200, exercise_id: 19},
           
           
           
           {id: 96, reps: 15, weight: 100, exercise_id: 20},
           
           {id: 97, reps: 15, weight: 100, exercise_id: 20},
           
           {id: 98, reps: 15, weight: 100, exercise_id: 20},
           
           {id: 99, reps: 15, weight: 100, exercise_id: 20},
           
           
           {id: 100, reps: 15, weight: 100, exercise_id: 20},
           

           


          

        ]);
      });
  };