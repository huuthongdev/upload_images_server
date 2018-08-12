import express from 'express';
import cors from 'cors';
import multer from 'multer';

// Setup Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/images/')
    },
    filename: (req, file, cb) => {
        const dotIndex = file.originalname.lastIndexOf('.');
        const fileExtension = file.originalname.substring(dotIndex + 1);
        cb(null, `${Date.now()}.${fileExtension}`);
    }
});
const upload = multer({ storage });


export const app = express();
app.use(cors());

app.post('/upload', upload.array('files', 12) ,(req, res) => {
    res.send('Success');
});


