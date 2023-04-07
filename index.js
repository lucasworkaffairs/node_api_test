import express from 'express'

const app = express()

app.listen(8080, () => console.log('Api Running on port 8080'))

app.get('/',(reg,res) => res.json("My API Running on port 8080"))