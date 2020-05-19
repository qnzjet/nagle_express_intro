//require express - give us a function
const express = require('express');

//create an instance of express by calling the function above
const app = express();
const port = 5000;

//serve up the static files from our public folder
app.use(express.static('server/public'));


//start the server
app.listen(port, ()=>{
    //functionality here
    console.log('listening on port', port);
})




