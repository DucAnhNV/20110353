const express = require('express');
const routers = express.Routers();
const controllers = require('../controllers/controllers.js');

// Route cho endpoint /
routers.get('/', controllers.getMyGroup);

// Route cho endpoint /<MSSV>/<id>
routers.get('/:MSSV/:id', controllers.getMemberById);
routers.post('/:MSSV/:id', controllers.addMember);

// Route cho endpoint /message/<id>
routers.get('/message/:id', controllers.getMessage);

module.exports = routers;
