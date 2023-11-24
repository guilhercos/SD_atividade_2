const express = require('express')
const app = express()
const bookController = require('./controllers/commentController')

app.use(express.json())

app.post('/criar', (req, res) => bookController.create(req, res))
app.get('/comentarios', (req, res) => bookController.commentAll(req, res))
app.delete('/deletar/:id', (req, res) => bookController.deleteComment(req, res))

app.listen(3000, () => {
  console.log('servidor rodando porta 3000')
})