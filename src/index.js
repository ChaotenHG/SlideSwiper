const ks = require('node-key-sender')
const app = require('express')();
const QRCode = require('qrcode')
const getLocalIp = require( "node-localip" );
const path = require('path');

const port = process.env.PORT || 3000;

  getLocalIp( function ( err, ip ) {
    
    if(ip != null){

      console.log("LocalIP: " + ip );

      QRCode.toString("http://" + ip + ":" + port,{type:'terminal'}, function (err, url) {
        console.log(url)
      })

     }
  });

app.post('/swip/left', (req, res) => {
  ks.sendKey("37")
  res.statusCode = 200
});

app.post("/swip/right", (req, res) => {
    ks.sendKey("39")
    res.statusCode = 200
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 