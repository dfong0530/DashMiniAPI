
const express = require('express');
const app = express();

const GetRandomData = require('./helper');


app.get("/api/GetData", (req, res) => {
    res.status(200).json({data: GetRandomData()});
});


app.listen(5000, () => {
    console.log("App listening on port 5000");
});