const mygroup = require('../models/models.js');

function mygroupRequest (req, res) {
    const ID = Number(req.params.mygroupID);
    const mygroup = mygroup.mygroup[ID];
    if (mygroup) {
        res.status(200).json(mygroup);
    }
    else {
        res.status(400).json({error:'Not valid'});
    }
}

module.exports = {
    mygroup
}
