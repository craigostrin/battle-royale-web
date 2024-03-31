import 'dotenv/config'
import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT

app.use(cors())

app.get('/', (_: Request, res: Response) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`🤖: Server running at http://localhost:${port}`)
})
