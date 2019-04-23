const db = require('../../data/databaseConfig');

const Users = require('./people');

const Training = require('training')

describe( () => {

    beforeEach(async () => {
        
        await db('users').truncate()
        
        await db('training').truncate()
    })

    test(async () => {
        const user = await Users.add({  
        
            fullname: 'FLName', 
        
            email: 'FLName@example.com',
        

            
            
            username: 'user1',
        

            
            password: 'pass1',
        
            
            height: 74,
        

            
            weight: 140
        })


        expect(user.password).toBe('');
      
    })


    test( async () => {
        
        const users = await Users.find();



        expect(users).toHaveLength(0)
    })


    test(async () =>{
        await Users.add({  
            fullname: 'FLName', 
            email: 'FLName@example.com',
        
            username: 'user1',
        
            password: 'pass1',
        
            height: 74,
        
            weight: 140
            })
            
        const user = await Users.findById(1)

        expect(user.fullname).toEqual('FLName')
    })
    
    test(async () =>{
        await Users.add({  
            fullname: 'FLName', 
            email: 'FLName@example.com',
        
            username: 'user1',
        
            password: 'pass1',
        
            height: 74,
        
            weight: 140
            })

        const user = await Users.getBy({ email: 'FLName@example.com' })

        expect(user.fullname).toEqual('FLName')
    })

    test( async () =>{
        
        const user = await Users.add({  
        
            fullname: 'FLName', 
            email: 'FLName@example.com',
        
            username: 'user1',
        
            password: 'pass1',
        
            height: 74,
        
            weight: 140
        
        })
        
        expect(user.fullname).toEqual('FLName')
        destroy = await Users.destroy(1)

        expect(destroy.fullname).toEqual(undefined)
    })

    test( async () => {
         
        await Users.add({  
        
            fullname: 'FLName', 
        
            
            
            email: 'FLName@example.com',
            

            
            
            username: 'user1',
            

            
            password: 'pass1',
            



            
            height: 74,
            


            weight: 140
           
        })

                await Training.add({
        
                    name: 'Relax',
            
        
                    date: 'January 01 2017',
            
        
                    user_id: 1
            })
        const training = await Users.getUserTraining(1)

        
        expect(training[0].user_id).toBe(1)
    });    
});