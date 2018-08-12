"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => cb(null, 'public'),
    filename: (req, file, cb) => {
        const dotIndex = file.originalname.lastIndexOf('.');
        const fileExtension = file.originalname.substring(dotIndex + 1);
        cb(null, `${Date.now()}.${fileExtension}`);
    }
});
exports.upload = multer_1.default({ storage: storage });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1QixNQUFNLE9BQU8sR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQztJQUMvQixXQUFXLEVBQUUsQ0FBQyxHQUFRLEVBQUUsSUFBUyxFQUFFLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7SUFDakUsUUFBUSxFQUFFLENBQUMsR0FBUSxFQUFFLElBQVMsRUFBRSxFQUFPLEVBQUUsRUFBRTtRQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDSixDQUFDLENBQUM7QUFFVSxRQUFBLE1BQU0sR0FBRyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMifQ==