const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.index);

router.get('/add', (_req, res)=>{
    res.render('customerViews/addCustomer');
});

router.post('/add', customerController.create);

router.get('/:id', customerController.customer);

router.get('/edit/:id', customerController.editForm);

router.post('/edit/:id', customerController.update);

router.get('/delete/:id', customerController.delete);


module.exports = router;