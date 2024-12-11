const Action = require('../models/ActionModel');
const Customer = require('../models/CustomerModel');

module.exports = {
    create: (req, res) => {
        const { actionType, description, customerId, contactDate } = req.body;
        const newAction = new Action({ actionType, description, contactDate, customerId });
        newAction.save()
        .then(()=>{
            res.redirect(`/customers/${customerId}`);   //sciezka?????
        })
            //Customer.updateOne({}, {}) // update Customer - add action to the action array -> co przekazac?
            .catch((err) => {
                console.error(err);
                res.send(err);
            });
        
    },
}