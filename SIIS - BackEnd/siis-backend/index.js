const express = require('express');
const config = require('config');
const auth = require('./routes/general_routes/auth');
const examRoutes = require('./routes/exam_routes/exam.route');
const assignmentRoutes = require('./routes/assignment_routes/assignment.route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT  || 3000;

//If the jwtPrivateKey is not set, exit the application.
if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPirvateKey is not defined');
    process.exit(1);
}
//Connect to mongoDB
mongoose.connect('mongodb://localhost/SIIS', {useNewUrlParser:true}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((err) => {
    console.log('Could not connect to MongoDB');
    console.log(err);
})

app.use(cors({
    //origin: 'http://localhost:3001'
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'x-auth-token'
  }));

//User the middleware 
app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/exams', examRoutes);
app.use('/api/assignments', assignmentRoutes);



app.listen(port, () => {
    console.log('Listening on port ' + port);
})

