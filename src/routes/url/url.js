const express = require("express");
const ShortId = require('shortid');
const UrlRecord = require("../../model/urlrecord/URLRecord");
const router = express.Router();



router.post("/makemeshort", async (req, res)=>{
    console.log("MAKE ME SHORT");
    try {
        const {fullURL} = req.body;
        const shortURL = ShortId.generate();
        console.log("shortURL", shortURL);

        let urlExists = await UrlRecord.findOne({fullURL: fullURL})
        if(urlExists){
            res.json(urlExists);
        }else{
            let url = await new UrlRecord({fullURL, shortURL});
            url.save();
            res.json(url)
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.get("/:shorty", async (req, res)=>{
    try {
        let shorty = req.params.shorty;
        let urlExists = await UrlRecord.findOne({shortURL: shorty})
        console.log(urlExists);
        if(urlExists){
            urlExists.clicks++;
            urlExists.save();
            res.redirect(urlExists.fullURL);
        }else{
            res.status(404).json('URL doesnt exist');
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
