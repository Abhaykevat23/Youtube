import express from 'express'

import { deleteComment, editComment, getAllComment, postComment } from '../Controllers/comment.js';
import auth from '../Middlewear/auth.js';

const routes=express.Router();
 
routes.post('/post',auth,postComment);
routes.get('/get',getAllComment);
routes.delete('/delete/:id',auth,deleteComment);
routes.patch('/edit/:id',auth,editComment);


export default routes;