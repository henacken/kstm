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
    socket.on('join', (roomId: any) => {
      socket.join(roomId)
      console.log('joined room!')
    })
    socket.on('message', (data: any) => {
      console.log(data)
      io.to(data.roomId).emit('message', {
        message: data.message,
        username: data.username,
        id: `${data.username}-${20}`,
      })
    })
  })

  expressApp.all('*', (req: any, res: any) => {
    return nextHandle(req, res)
  })
  server.listen(port)
})
