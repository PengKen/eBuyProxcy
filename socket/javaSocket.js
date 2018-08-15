const net = require('net')
const HOST = '192.168.8.110'
const PORT = 10000
const client = new net.Socket()
client.setEncoding('utf-8')
module.exports = function () {
  client.connect(PORT,HOST,function () {
    client.write('hello java')
  })
  client.on('data',function (data) {
    console.log(data)
  })
}


