const express = require('express');
const path = require('path');
const app = express();

const multer = require('multer');
const upload = multer({dest: 'uploads/'})

const {mergePdfs} = require('./merge')

const port = 3000;

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.use('/static', express.static('public'));

app.post('/merge', upload.array('pdfs'), async (req, res, next)=>{

    let pdfsArray = [];
    for(file of req.files){
        pdfsArray.push(path.join(__dirname,file.path));
    }
    const filename = await mergePdfs(pdfsArray);
    res.redirect(`http://localhost:3000/static/${filename}.pdf`);

});

app.listen(port, ()=>{
    console.log(`listening on http://127.0.0.1:${port}`);
});
