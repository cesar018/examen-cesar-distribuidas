const nodemailer = require('nodemailer');
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'cesarquezada@upeu.edu.pe', // generated ethereal user
      pass: 'ejbqvghjcrlrmwov', // generated ethereal password
    },
  });
  transporter.verify().then(()=>{
    console.log('Ready for send emails');
  });
