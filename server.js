const express = require('express')
require('dotenv').config();
const cors = require('cors');
const apiRouter = require('./');
const port = process.env.PORT;

const app = express();


app.use(cors());
app.use('/' , apiRouter)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
