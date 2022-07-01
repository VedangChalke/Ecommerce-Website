// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//initizing express.js
const app = express();

//homeroute
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"public","index.html"));
})

app.listen(5501, () => {
    console.log('listening on port 5501...');
})
