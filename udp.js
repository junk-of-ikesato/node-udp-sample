const dgram = require('dgram');

const sock = dgram.createSocket("udp4", function (msg, rinfo) {
  console.log(["aaaaaaaaaaa0", msg]);
});

sock.bind( 3610, '0.0.0.0', function() {
  //sock.setMulticastLoopback( true );
  //sock.addMembership( '224.0.23.0' );
});



const buffer = new Buffer([
  0x10, 0x81,
  0x00, 0x02,
  0x01, 0x33, 0x01, // seoj
  0x05, 0xff, 0x01, // deoj
  0x62,
  0x02,
  0x80, // epc1
  0x00, // pdc1
  0x82, // epc2
  0x00, // pdc2
]);



const client = dgram.createSocket("udp4");
client.send( buffer, 0, buffer.length, 3610, '192.168.100.9', function(err, bytes) {
  client.close();
});
