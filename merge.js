const PDFMerger = require('pdf-merger-js');
const crypto = require('crypto');

var merger = new PDFMerger();

const mergePdfs = async (pdfs) => {

    await pdfs.array.forEach(async element => {
    await merger.add(element);
    });

    const randomString = crypto.randomBytes(20).toString('hex');
    await merger.save(`public/${randomString}.pdf`); //save under given name and reset the internal document
    return randomString;

}

module.exports = {mergePdfs};