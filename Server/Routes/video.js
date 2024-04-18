import express  from "express";
import {uploadVideo , getAllVideos} from '../Controllers/video.js'
import {likeController} from '../Controllers/like.js'
import {viewController} from '../Controllers/view.js'
import upload from '../Helpers/FileHalpers.js'
import { likeVideoController , getAllLikeVideoController ,deleteLikedVideoController } from  '../Controllers/likedvideo.js'
import { watchLaterController , getAllwatchLaterController ,deleteWatchLaterController } from  '../Controllers/watchLater.js'
import { HistoryController , getAllHistoryController ,clearHistoryController } from  '../Controllers/history.js'
import auth from "../Middlewear/auth.js";


const routes=express.Router();

routes.post("/uploadVideo",auth,upload.single("file"),uploadVideo);

routes.get("/getvideos",getAllVideos)
routes.patch('/like/:id',auth,likeController)
routes.patch('/view/:id',viewController)

routes.post('/likeVideo',auth,likeVideoController)
routes.get('/getAllLikeVideo',getAllLikeVideoController)
routes.delete('/deleteLikeVideo/:videoId/:Viewer',auth,deleteLikedVideoController)

routes.post('/watchLater',auth,watchLaterController)
routes.get('/getAllwatchLater',getAllwatchLaterController)
routes.delete('/deleteWatchLater/:videoId/:Viewer',auth,deleteWatchLaterController)

routes.post('/history',auth,HistoryController)
routes.get('/getAllhistory',getAllHistoryController)
routes.delete('/clearhistory/:userId',auth,clearHistoryController)


export default routes;