const express = require('express');
const authMiddleware = require('../../middleware/auth');
const {CourseIns, ValidateCourseIns} = require('../../models/course_models/ins_Course');
const router = express.Router();

router.post('/', (req, res) => {

    const {error} = ValidateCourseIns(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    console.log('New course information successfully added to Mongo DB');
    CourseIns.create(req.body).then((course) => res.send(course)).catch((err) => res.send(err.message));
    
});

module.exports = router;