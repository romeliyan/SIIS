const express = require('express');
const authMiddleware = require('../../middleware/auth');
const { Admin, ValidateAdmin } = require('../../models/admin_models/admin');
const router = express.Router();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nodeudith@gmail.com',
        pass: 'nodeproject'
    }
})

router.get('/', async (req, res) => {

    if (Object.keys(req.query).length === 0) {
        console.log('No query parameters set. Returning all admins');
        const admins = await Admin.find().sort('firstName');
        res.send(admins);
    }
    else {
        console.log('400 - Bad Request');
        return res.status(400).send('Invalid query parameters. {firstName}');
    }
});

router.get('/:id', async (req, res) => {
    const email = req.params.id;
    console.log(req.params.id);

    var mailOptions = {
        from: 'nodeudth@gmail.com',
        to: email,
        subject: 'Added as an Admin',
        text: `You have been added as an Admin of our Organization.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

router.post('/', (req, res) => {

    const { error } = ValidateAdmin(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    console.log('New admin information successfully added to Mongo DB');
    Admin.create(req.body).then((admin) => res.send(admin)).catch((err) => res.send(err.message));

});

router.put('/:id', (req, res) => {

    const { error } = ValidateAdmin(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    Admin.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Admin.findOne({ _id: req.params.id }).then((admin) => res.send(admin)).catch((err) => res.send(err.message));
    }).catch((err) => res.send(err.message));

});

router.delete('/:id', async (req, res) => {

    const admin = await Admin.findByIdAndDelete(req.params.id);

    if (!admin) return res.status(404).send('Admin information with the given id does not exist');

    res.send(admin);
});

module.exports = router;