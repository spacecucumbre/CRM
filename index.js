const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const authMiddleware = require("./app/middlewares/authMiddleware");


mongoose.connect("mongodb://127.0.0.1:27017/project-2");


const customerRouter = require('./app/router/customerRouter');
const actionRouter = require('./app/router/actionRouter');	
const userRouter = require('./app/router/userRouter')



app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/customers', authMiddleware, customerRouter);
app.use('/action', authMiddleware, actionRouter);
app.use('/user', userRouter)


app.get("/login", function (_req, res) {
    res.render("home", {});
});


app.listen(5050, function () {
    console.log("Serwer Node.js działa");
});