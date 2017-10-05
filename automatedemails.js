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
  to: 'cody.easterling@influencehealth.com, alex.haughton@influencehealth.com' ,
  subject: 'PC MASTER RACE',
  text: 'Destiny 2 at 4k, 60 FPS! Get off me son!'
};

transporter.sendMail(mailOptions, function(error, info){
  if(error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
