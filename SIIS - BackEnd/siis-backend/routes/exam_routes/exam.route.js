const express = require('express');
const authMiddleware = require('../../middleware/auth');
const {Exam, ValidateExam} = require('../../models/exam_models/exam');
const router = express.Router();

router.get('/', async (req, res) => {

    if(Object.keys(req.query).length === 0){
        console.log('No query parameters set. Returning all exams');
        const exams = await Exam.find().sort('name');
        res.send(exams);
    }
    else if(Object.keys(req.query).length === 1 && Object.keys(req.query)[0] === 'name'){
        console.log('Query parameters set:{name}');
        const exams = await Exam.find({name: req.query.name}).sort('name');
        res.send(exams);
    }
    else{
        console.log('400 - Bad Request');
        return res.status(400).send('Invalid query parameters. {name}');
    }
});

router.get('/:id', async (req, res) => {

    const exam = await Exam.findById(req.params.id);

    if(!exam){
        return res.status(404).send('Exam information with the given id does not exist');
    }

    console.log('Exam information found and sent');
    res.send(exam);
    
});

router.post('/', (req, res) => {

    const {error} = ValidateExam(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    console.log('New exam information successfully added to Mongo DB');
    Exam.create(req.body).then((exam) => res.send(exam)).catch((err) => res.send(err.message));
    
});

router.put('/:id', (req, res) => {
    
    const {error} = ValidateExam(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    Exam.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Exam.findOne({_id:req.params.id}).then((exam) => res.send(exam)).catch((err) => res.send(err.message));
    }).catch((err) => res.send(err.message));

});

router.delete('/:id', async (req, res) => {

    const exam = await Exam.findByIdAndDelete(req.params.id);

    if(!exam) return res.status(404).send('Exam information with the given id does not exist');

    res.send(exam);
});

module.exports = router;