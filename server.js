import express from 'express';
import multer from 'multer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const upload = multer({ dest: 'uploads/' })
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.post('/merge', upload.array('pdfs', 2), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
 
})
  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
