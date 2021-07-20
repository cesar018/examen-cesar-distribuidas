import { Router } from "express";
const router = Router();
const multer = require("multer");
const {google}=require('googleapis');
const path=require('path');
const fs=require('fs');
const CLIENT_ID = '226483822468-3kgaj4hh46ngm3bf1bdvn39rq522vsfa.apps.googleusercontent.com';
const CLIENT_SECRET = 'p4OkxBkhMvfV6wAyshvM3nyh';
const REDIRECT_URI='https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04FoIgVsy3BVcCgYIARAAGAQSNwF-L9Irbaq-_VNCRlwAoaxCXBtfXCKkHZDI1Eklo-t92wYt1wrUKqWrnAWv_BVZq7mcyqfUwj0';
const oauth2Client=new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN});
const drive=google.drive({
    version:'v3',
    auth:oauth2Client
});
var filePath;
var archivo;
var storage = multer.diskStorage ({
    destination: function (req, file, cb) {
      cb (null, 'src/archivos/')
    },
    filename: function (req, file, cb) {
      cb (null, file.originalname)
    }
  })
  var upload = multer ({storage: storage});
router.post("/", upload.single("imagen"), async (req, res, next) => {
    filePath = path.join("src/archivos/", req.file.originalname);
    console.log(filePath);
    const file = req.file; 
    archivo = file.originalname;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }else{
      uploadFile();
  }
  res.send("Archivo subido correctamente: "+file.originalname);
});
async function uploadFile(){
    try {
        const response = await drive.files.create({
            requestBody:{
                name:archivo,
                mimeType:'image/png'
            },
            media:{
                mimeType:'image/png',
                body:fs.createReadStream(filePath)                
            }
        })
        fs.unlinkSync(filePath);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}
export default router;