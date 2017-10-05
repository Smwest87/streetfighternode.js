var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'medseekautomation@gmail.com',
    pass: 'Medseek1!'
  }
});

var mailOptions = {
  from: 'medseekautomation@gmail.com',
  to: 'steven.west@influencehealth.com' ,
  subject: 'This could be mildly exciting',
  html: '<h1> "This is the story of a girl"</h1> <br> <p> "Who cried a river an drowned the whole world" </p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if(error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
