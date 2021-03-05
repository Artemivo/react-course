const Router = require ('express').Router;
const commentRouter = Router();
import users from './db/users.json'



let comments = [];



commentRouter.get('/', (req,res) =>{
    res.send(comments)

});

commentRouter.post('/signup', (req,res) =>{
    const newComment = req.body
    comments.push(newComment)
    res.send({success: true});
  });


  commentRouter.delete('/:id', (req,res) => {
  const commentId = req.params.id;
  
  const updatedArray = comments.filter(u => u.id !== commentId );
  const deletedCount = comments.length - updatedArray.length;
  comments = updatedArray.slice();
  res.send({deletedCount})

});

commentRouter.put('/:id', (req,res)=>{
  const commentId = req.params.id;
  let count = 0;
  const updatedArray = comments.map(u => {
    if(u.id === commentId){
      count++;
      return Object.assign({},u,req.body);
    }
    return u;
  } );
  comments = updatedArray.slice();
  res.send({updatedCount : count})
})

module.exports = commentRouter;