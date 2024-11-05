const express = require('express')
const app = express()
const port = 3000

const { EventEmitter } = require("events")
const eventEmmiter = new EventEmitter()

const eventDispatcher = (req, res, next) => {

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Connection': 'keep-alive'
  })

  eventEmmiter.on('cancelamento_pedido', () => {
    res.write('event: new-notification\n')
    res.write('data: {"user_id": "1", "tipo": "cancelamento_pedido"}')
    res.write('\n\n')
  })

  eventEmmiter.on('novo_pedido', () => {
    res.write('event: new-notification\n')
    res.write('data: {"user_id": "1", "tipo": "novo"}')
    res.write('\n\n')
  })

}

app.get('/events', eventDispatcher, (req, res) => {
  res.send('Hello Waaaorld!')
})

app.get('/pedidos/cancelamento', (req, res) => {
  eventEmmiter.emit('cancelamento_pedido')
  res.send('Pedido cancelado!')
})

app.get('/pedidos/novo', (req, res) => {
  eventEmmiter.emit('novo_pedido')
  res.send('Novo pedido!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
