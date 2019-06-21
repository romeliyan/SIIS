const express = require('express');
const authMiddleware = require('../../middleware/auth');
const { Instructor, ValidateInstructor } = require('../../models/instructor_models/instructor');
const router = express.Router();

router.get('/', async (req, res) => {

    if (Object.keys(req.query).length === 0) {
        console.log('No query parameters set. Returning all instructors');
        const instructors = await Instructor.find().sort('firstName');
        res.send(instructors);
    }
    else {
        console.log('400 - Bad Request');
        return res.status(400).send('Invalid query parameters. {firstName}');
    }
});

router.get('/:id', async (req, res) => {

    const instructor = await Instructor.findById(req.params.id);

    if (!instructor) {
        return res.status(404).send('Instructor information with the given id does not exist');
    }

    console.log('Instructor information found and sent');
    res.send(instructor);

});

router.post('/', (req, res) => {

    const { error } = ValidateInstructor(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    console.log('New instructor information successfully added to Mongo DB');
    Instructor.create(req.body).then((instructor) => res.send(instructor)).catch((err) => res.send(err.message));

});

router.put('/:id', (req, res) => {

    const { error } = ValidateInstructor(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    Instructor.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Instructor.findOne({ _id: req.params.id }).then((instructor) => res.send(instructor)).catch((err) => res.send(err.message));
    }).catch((err) => res.send(err.message));

});

router.delete('/:id', async (req, res) => {

    const instructor = await Instructor.findByIdAndDelete(req.params.id);

    if (!instructor) return res.status(404).send('Instructor information with the given id does not exist');

    res.send(instructor);
});

module.exports = router;