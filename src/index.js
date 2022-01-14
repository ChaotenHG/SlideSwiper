#!/usr/bin/env node

const app = require('express')();
const QRCode = require('qrcode')
const getLocalIp = require( "node-localip" );
const path = require('path');
const ks = require('node-key-sender')

const port = process.env.PORT || 3000;

  getLocalIp( function ( err, ip ) {
    
    if(process.env.IP || ip != null){

      let ipString

      if(process.env.IP != null){
        ipString = process.env.IP
      }else {
        ipString = ip
      }

      console.log("LocalIP: " +  ipString );

      QRCode.toString("http://" + ipString + ":" + port,{type:'terminal'}, function (err, url) {
        console.log(url)
      })

     }
  });

app.post('/swip/left', (req, res) => {
  ks.sendKey("@37")
  res.statusCode = 200
  res.send("{}")
});

app.post("/swip/right", (req, res) => {
    ks.sendKey("@39")
    res.statusCode = 200
    res.send("{}")
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 