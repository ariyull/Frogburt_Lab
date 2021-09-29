const fs = require('fs')
const express = require("express");
const app = express();
const path = require('path')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const got = require('got');
const { resolve } = require('path');


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.urlencoded());
app.use(express.json());
app.use("/bootstrap.css", express.static("node_modules/bootstrap/dist/css/bootstrap.min.css"));
app.use("/bootstrap.js", express.static("node_modules/bootstrap/dist/js/bootstrap.min.js"));



app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/join", (req, res) => {
    res.render("join");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/people", (req, res) => {
    res.render("people");
});


app.listen(3001);
console.log("3001 is port");