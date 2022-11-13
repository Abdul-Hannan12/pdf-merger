const express = require('express');
const path = require('path');
const app = express();

const multer = require('multer');
const upload = multer({dest: 'uploads/'})

const port = 3000;

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 2), (req, res, next)=>{
    console.log(req.files);
    res.send({data: req.files});
});

app.listen(port, ()=>{
    console.log(`listening on http://127.0.0.1:${port}`);
});