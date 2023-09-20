const { getServerSession } = require('next-auth')

const { createServer } = require('http')
const express = require('express')
const next = require('next')
const { Server, Socket } = require('socket.io')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const port = parseInt(process.env.PORT || '3000', 10)
const nextHandle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const expressApp = express()
  const server = createServer(expressApp)
  const io = new Server()
  io.attach(server)

  expressApp.get('/socket', async (_: any, res: any) => {
    res.send('hello, world')
  })

  io.on('connection', (socket: typeof Socket) => {
    socket.on('join', (data: any) => {
      socket.join(data.roomId)
      io.to(data.roomId).emit('connect', {})
      io.to(data.roomId).emit('message', {
        comment: data.username + 'さんが入室しました',
        name: 'システムメッセージ',
        type: 'system',
      })
    })
    socket.on('message', (data: any) => {
      io.to(data.roomId).emit('message', {
        comment: data.message,
        name: data.username,
        type: 'user',
      })
    })
  })

  expressApp.all('*', (req: any, res: any) => {
    return nextHandle(req, res)
  })
  server.listen(port)
})
