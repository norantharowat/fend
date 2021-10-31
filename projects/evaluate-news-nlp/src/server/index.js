const dotenv = require('dotenv');
dotenv.config();
// var path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const fetch = require('node-fetch')
const app = express()

app.use(express.static('dist'))
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use(cors());


const API_KEY = process.env.API_KEY

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post('/analyze', async function (req, res) {
    const url = req.body.URL

    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`)
    const analyze_result = await response.json()
   
    res.send(analyze_result)
    
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

