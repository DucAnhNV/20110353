const express = require('express')

//khởi động
const app = express()

//Khởi động express middleware
app.use(express.json())

const express = require('express');
const port = 5000;

// Import các route từ routes
const routes = require('./routes/routes.js');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

