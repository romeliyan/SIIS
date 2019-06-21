const _ = require('lodash');
const bcrypt = require('bcrypt'); 
const express = require('express');
const {User, validateUserForLogin, validateUser} = require('../../models/general_models/users');
const router = express.Router();
const authMiddleware = require('../../middleware/admin'); 

//Check whether a given user is registered
router.post('/', async (req, res) => {
    
    const {error} = validateUserForLogin(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    //Make sure the user in not already registered
    let user = await User.findOne({email: req.body.email});

    if(!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword) return res.status(400).send('Invalid email or password');

    const token = user.generateAuthToken();

    res.send(token);

});

//HTTP method to add a new user
router.post('/user', async (req, res) => {

    const {error} = validateUser(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});

    if(user) return res.status(400).send('User already exists');

    //If the user is unregistered save the user
    user = new User(_.pick(req.body, ['email', 'password', 'userType']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    user.save().then((user) => {
        console.log('New user added successfully');
        res.send(_.pick(user, ['_id', 'email']));
    })
})

//Http method to delete a user
router.delete('/:id', authMiddleware, async (req, res) => {

    let user = await User.findByIdAndDelete(req.params.id);

    if(!user) return res.status(404).send('User with the given id does not exist');
    user = _.pick(user, ['email', 'userType']);
    res.send(user);
})

module.exports = router;