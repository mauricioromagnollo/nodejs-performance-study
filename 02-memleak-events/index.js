import { createServer } from 'node:http'
import Events from 'node:events'
import { randomBytes } from 'node:crypto'

const myEvent = new Events()

function getBytes() {
  return randomBytes(10000)
}

function onData(msg) {
  getBytes()
  const items = []
  setInterval(function myInterval() {
    items.push(msg)
  }, 200)
}

myEvent.on('data', onData)
function handler(request, response) {
  myEvent.emit('data', Date.now())
  response.end('ok')
}

createServer(handler)
  .listen(3000, () => console.log("server is runing at 3000"))