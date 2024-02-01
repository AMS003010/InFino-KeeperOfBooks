const express = require('express');
const {DataModel} = require('./model');

const router = express.Router()

router.get("/getbooks",async (req,res) => {
    const data = await DataModel.find();
    res.status(200).send({"data":data});
} )

router.post("/addbook", async (req,res) => {
    const body = await req.body;
    const sendObj = await new DataModel({
        "name": body.name,
        "author": body.author,
        "publication": body.publication,
        "series": body.series
    }).save();
    res.status(200).send({"msg":"Book added"});
});

module.exports = router;
