import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => cb(null, 'public'),
    filename: (req: any, file: any, cb: any) => {
        const dotIndex = file.originalname.lastIndexOf('.');
        const fileExtension = file.originalname.substring(dotIndex + 1);
        cb(null, `${Date.now()}.${fileExtension}`);
    }
});

export const upload = multer({ storage: storage });