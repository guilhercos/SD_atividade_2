let arrayComments = []

async function create (req, res){
  const {id, content, autor, data} = req.body
  const comment = {
    id,
    content,
    autor,
    data
  }
  arrayComments.push(comment)
  res.json(comment)
}
async function commentAll (req, res){
  res.json(arrayComments)
}
async function deleteComment (req, res){
  const id = req.params.id
  const newArray = arrayComments.filter((comment) => {
    if(comment.id != id){
      return comment
    }
  })
  arrayComments = newArray
  res.json(newArray)
}

module.exports = {create, commentAll, deleteComment}