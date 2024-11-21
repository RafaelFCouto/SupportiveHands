const config = require('./configs/default.json');
require('./database/index');
const routes = require('./routes');
const express = require('express');
const app = express();

app.use(express.json());
app.use(routes);

const PORT  = config.PORT
app.listen(PORT, ()=>{
    console.log(`server is on on port ${PORT}`);
});

module.exports = app;