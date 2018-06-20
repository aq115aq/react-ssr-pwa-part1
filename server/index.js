import express from 'express'
import * as fs from 'fs'
import * as path from 'path'

// // react
// import * as React from 'react'
// import * as ReactDOMServer from 'react-dom/server'

// // router
// import { StaticRouter } from 'react-router-dom'
// import getRoutes from 'routes/routes';

const app = express()

app.use(express.static(path.resolve('build'), {index: false}))

app.get('*', (req, res) => {
  let html = fs.readFileSync(path.resolve('build/index.html'), 'utf8')
  res.send(html)
})

app.listen(8088, () => {
    console.log('监听：8088')
});