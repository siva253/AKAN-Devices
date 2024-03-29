// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end('helooooooooo');
// }).listen(8080);

const express = require('express');
var nodemailer = require('nodemailer');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/my-angular-app/index.html'));
// });

// const port = process.env.PORT || '3000';
// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port, () => console.log(`API running on localhost:${port}`));

// app.listen(8000,()=>{
//     console.log('server started with 8000');
// })

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];


   

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/dist'));



app.post('/send-email',function(req,res){

    console.log(req.body.cont_Name +'  '+ req.body.cont_Email);
    var transporter = nodemailer.createTransport({
        //service: 'gmail',
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'sivaapraasaad@gmail.com',
          pass: '94417848'
        }
      });
  
      var mailOptions = {
        from: 'sivaapraasaa@gmail.com',
        to: 'sivadurgaprasad253@gmail.com',
        subject: 'Email from my-angular-app visited user: ' + req.body.cont_Email,
        text: 'Hello we have a user: ' + req.body.cont_Name +'. Below are the Details: ',
        html: `
        <div>Hello we have a user:<b>${req.body.cont_Name}</b>. Below are the Details:</div><br/>
        <table style="width:50%" border="1" rules="all" bgColor="lightskyblue">
        <tr>
          <th align="left">Name:</th>
          <td>${req.body.cont_Name}</td>
        </tr>
        <tr>
          <th align="left">Email:</th>
          <td>${req.body.cont_Email}</td>
        </tr>
        <tr>
          <th align="left">Location:</th>
          <td>${req.body.cont_Location}</td>
        </tr>
        <tr>
          <th align="left">Message:</th>
          <td>${req.body.cont_Message}</td>
        </tr>
      </table>
        `
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send('Failed');
          console.log('Email error: '+error);
        } else {
          res.send('Success');
          console.log('Email sent: ' + info.response);
        }
      });
});

app.all('/*',function(req,res){
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname + `/dist/AKANDevices/${req.url}`));
  }else{
    res.sendFile(__dirname + '/dist/AKANDevices/index.html');
  }
});