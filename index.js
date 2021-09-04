const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const hbs = require('express-hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


app.use(cookieParser());
app.use(session({
    secret: 'positronx',
    saveUninitialized: false,
    resave: false
}));
const port=2000;
const basePath="/api";
const user =require("./router/router.js");
app.use('/public', express.static('public'));
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/pages'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/pages');
app.use('/user', user);

app.listen(port,()=>{
    console.log("Server is listining on port : 2000");
});

