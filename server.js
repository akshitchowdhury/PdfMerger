import express from 'express';
import multer from 'multer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import merge from '../PdfMerger/merger/merge.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const upload = multer({ dest: 'uploads/' })

const app = express();

const port = 3001;
app.use('/static', express.static('public'))
app.get('/', (req, res) => {
    
    
      res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    console.log(req.files)
    await merge(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect("http://localhost:3001/static/merged.pdf")


})
  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
