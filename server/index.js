const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM8', { baudRate: 38400 })

const express = require('express')
const app = express()

const server = app.listen(3000, () => {
    console.log('Server running on port 3000')
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(socket.id)
})

const parser = new Readline()
port.pipe(parser)

parser.on('data', line => {
    io.emit('data', line)
})

