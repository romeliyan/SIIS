const express = require('express');
const authMiddleware = require('../../middleware/auth');
const {Student} = require('../../models/student_models/student');
const router = express.Router();

router.post('/', (req, res) => {
    
    console.log('New exam information successfully added to Mongo DB');
    Student.create(req.body).then((student) => res.send(student)).catch((err) => res.send(err.message));
    
});



module.exports = router;