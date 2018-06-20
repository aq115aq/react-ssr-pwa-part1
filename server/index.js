import express from 'express'
import * as fs from 'fs'
import * as path from 'path'

const app = express()

app.use(express.static(path.resolve('build'), {index: false})) // 资源获取路径设置为 build 目录下

app.get('*', (req, res) => {
  let html = fs.readFileSync(path.resolve('build/index.html'), 'utf8')
  res.send(html)
})

app.listen(8088, () => {
    console.log('监听：8088')
});