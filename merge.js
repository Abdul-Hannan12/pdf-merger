const PDFMerger = require('pdf-merger-js');
const crypto = require('crypto');

const merger = new PDFMerger();

let mergePdfs = async (pdfs) => {

    for (files of pdfs){
        await merger.add(files);
    }

    const randomString = crypto.randomBytes(20).toString('hex');
    await merger.save(`public/${randomString}.pdf`); //save under given name and reset the internal document
    return randomString;

}

module.exports = {mergePdfs};