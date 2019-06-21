const express = require('express');
const authMiddleware = require('../../middleware/auth');
const {Assignment, ValidateAssignment} = require('../../models/instructor_models/assignment');
const router = express.Router();

router.get('/', async (req, res) => {

    if(Object.keys(req.query).length === 0){
        console.log('No query parameters set. Returning all assignments');
        const assignments = await Assignment.find().sort('name');
        res.send(assignments);
    }
    else if(Object.keys(req.query).length === 1 && Object.keys(req.query)[0] === 'name'){
        console.log('Query parameters set:{name}');
        const assignments = await Assignment.find({name: req.query.name}).sort('name');
        res.send(assignments);
    }
    else{
        console.log('400 - Bad Request');
        return res.status(400).send('Invalid query parameters. {name}');
    }
});

router.get('/:id', async (req, res) => {

    const assignment = await Assignment.findById(req.params.id);

    if(!assignment){
        return res.status(404).send('Assignment information with the given id does not exist');
    }

    console.log('Assignment information found and sent');
    res.send(assignment);
    
});

router.post('/', (req, res) => {

    const {error} = ValidateAssignment(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    console.log('New assignment information successfully added to Mongo DB');
    Assignment.create(req.body).then((assignment) => res.send(assignment)).catch((err) => res.send(err.message));
    
});

router.put('/:id', (req, res) => {
    
    const {error} = ValidateAssignment(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    Assignment.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Assignment.findOne({_id:req.params.id}).then((assignment) => res.send(assignment)).catch((err) => res.send(err.message));
    }).catch((err) => res.send(err.message));

});

router.delete('/:id', async (req, res) => {

    const assignment = await Assignment.findByIdAndDelete(req.params.id);

    if(!assignment) return res.status(404).send('Assignment information with the given id does not exist');

    res.send(assignment);
});

module.exports = router;