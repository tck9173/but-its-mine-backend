require('dotenv').config();

const express = require('express');
const methodOverride=require('method-override');
const app = express();
// const routes = require('./routes')

app.listen(process.env.PORT, () => {
    console.log(`I am listening on  ${process.env.PORT}`);
})