module.exports = {

    development: {
     client: 'sqlite3',
     useNullAsDefault: true,
     connection: {
   
   
        filename: './data/sqlite3lamabda'
     },
     migrations: {
   
        directory: './migrations'
     },
     seeds: {
   
        directory: './seeds'
     }
   },
 };