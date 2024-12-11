const express = require('express');
const router = express.Router();
const actionController = require('../controllers/actionController');


router.get('/actions/add/:customerId', (req, res) => {
    
    const customerId = req.params.customerId;                                                   
    res.render('actionViews/addAction', { customerId }); // Przekazujemy ID klienta do widoku 
});

router.post('/add', actionController.create);



module.exports = router;