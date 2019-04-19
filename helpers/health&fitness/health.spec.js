const Health  = require('health');

describe( () => {

    
    beforeEach(async () => {
    
        await db('health').truncate()
    
        
        
        await db('Trainings').truncate()
    })



    test(async () => {
        
    
        const health = await Health.add({
    
            
            
            name: 'Run day',
        

            
            date: 'January 02 2001',
            
            user_id: 1
              });

        
              expect(health.name).toBe('Run Day');
      
    })

    test(async () => {
     
        const health = await Health.find()

     
        expect(health).toHaveLength(0)
    })

    test( async () =>{
            
        await Health.add({
            
            name: 'Run Day',
        
            
            date: 'January 02 2001',
            
            user_id: 1
           
        });

            
            await Health.addTrainingTohealth({ 
            
           
                name: 'bench-press',
            
                health_id: 1
            
            })


            
            const Trainings = await Health.gethealthTraining(1)

            expect(Trainings[0].name).toBe('bench-press')
            



    })
    
    
    
});