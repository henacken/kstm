const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const port = parseInt(process.env.PORT || '3000', 10)
const nextHandle = nextApp.getRequestHandler()

const expressApp = express()

nextApp.prepare().then(() => {
  expressApp.all('*', (req: any, res: any) => {
    return nextHandle(req, res)
  })
  expressApp.listen(port)
})
