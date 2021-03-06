'use strict'

const http = (require('http').globalAgent.maxSockets = 1000)
const gio = require('./src')

const { PORT = 80 } = process.env
const ns = '/base'

gio(PORT, ns)
console.log(`WebSocket server start!
port: ${PORT}
namespace: ${ns}
`)
