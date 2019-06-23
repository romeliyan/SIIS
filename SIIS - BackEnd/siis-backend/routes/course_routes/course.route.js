const express = require('express');
const authMiddleware = require('../../middleware/auth');
const {Course, ValidateCourse} = require('../../models/course_models/course');
const router = express.Router();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nodeudith@gmail.com',
      pass: 'nodeproject'
    }
  });

  

router.get('/', async (req, res) => {

    if(Object.keys(req.query).length === 0){
        console.log('No query parameters set. Returning all courses');
        const courses = await Course.find().sort('name');
        res.send(courses);
    }
    else{
        console.log('400 - Bad Request');
        return res.status(400).send('Invalid query parameters. {name}');
    }
});

router.get('/:id', async (req, res) => {

    const email=req.params.id;
    console.log(req.params.id);
    var mailOptions = {
        from: 'nodeudith@gmail.com',
        to: email,
        subject: 'Added to the course',
        text: `You have been added to a new module.Login for more details.`
        // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
      };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    //const course = await Course.findById(req.params.id);

    //if(!course){
     //   return res.status(404).send('Course information with the given id does not exist');
    //}

    //console.log('Course information found and sent');
    //res.send(course);
    
});

router.post('/', (req, res) => {

    const {error} = ValidateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    console.log('New course information successfully added to Mongo DB');
    Course.create(req.body).then((course) => res.send(course)).catch((err) => res.send(err.message));
    
});

router.put('/:id', (req, res) => {
    
    const {error} = ValidateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    Course.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Course.findOne({_id:req.params.id}).then((course) => res.send(course)).catch((err) => res.send(err.message));
    }).catch((err) => res.send(err.message));

});

router.delete('/:id', async (req, res) => {

    const course = await Course.findByIdAndDelete(req.params.id);

    if(!course) return res.status(404).send('Course information with the given id does not exist');

    res.send(course);
});

module.exports = router;