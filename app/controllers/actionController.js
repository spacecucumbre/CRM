const Action = require('../models/ActionModel');
const Customer = require('../models/CustomerModel');

module.exports = {
    create: (req, res) => {
        console.log(req.body);
        const newAction = new Action(req.body);
        newAction.save();
        console.log('newAction._id:', newAction._id);

        Customer.updateOne({ _id: req.params.id }, { $push: { actions: newAction._id } })
            .catch((err) => {
                console.error(err);
                res.send(err);
            });
        res.redirect(`/customers/${req.params.id}/actions`);
    },
}