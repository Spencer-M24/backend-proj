// Import

const server = require('api/file.js');


const file = 

require('dotenv').config()
require('./api/file');

// Ports 
const port = process.env.PORT || 7000

file.listen(port, ()=> {


});


    
