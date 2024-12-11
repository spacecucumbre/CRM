const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/signup', (_req, res) => {
    res.render('userViews/signupUser')
});

router.post('/signup', userController.create);

router.get('/login', (req, res) => {
    if (req.query.loginRedirect) {
        res.render('userViews/loginUser', {
            error: true,
            message: "Please login"
        })
        return;
    }

    res.render('userViews/loginUser')
});

router.post('/login', userController.login);

router.get('/logout', userController.logout);


module.exports = router;
