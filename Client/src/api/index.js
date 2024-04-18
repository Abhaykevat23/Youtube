import axios from 'axios'
const API =axios.create({baseURL : `https://youtube-server-snowy.vercel.app/`})
// const API =axios.create({baseURL : `http://localhost:5500/`})
API.interceptors.request.use(req=>{
    if(localStorage.getItem('Profile'))
    {
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login=(authData)=>API.post('/user/login',authData);

export const updateChanelData=(id,updateData)=>API.patch(`/user/update/${id}`,updateData);

export const fetchAllChanel=()=>API.get('/user/getAllChanels');

export const uploadVideo=(fileData,fileOptions)=>API.post('/video/uploadVideo',fileData,fileOptions);

export const getVideos=()=>API.get('/video/getvideos');

export const likeVideo=(id,Like)=>API.patch(`/video/like/${id}`,{Like});
export const viewVideo=(id)=>API.patch(`/video/view/${id}`);


export const addToLikedVideos=(likedVideoData)=>API.post('/video/likeVideo',likedVideoData)

export const getAllLikedVideo=()=>API.get('/video/getAllLikeVideo');

export const deleteLikedVideo=(videoId,Viewer)=>API.delete(`/video/deleteLikeVideo/${videoId}/${Viewer}`);


export const addToWatchLater=(watchLaterData)=>API.post('/video/watchLater',watchLaterData)

export const getAllWatchLater=()=>API.get('/video/getAllwatchLater');

export const deleteWatchLater=(videoId,Viewer)=>API.delete(`/video/deleteWatchLater/${videoId}/${Viewer}`);


export const addToHistory=(HistoryData)=>API.post('/video/history',HistoryData)

export const getAllHistory=()=>API.get('/video/getAllhistory');

export const clearHistory=(userId)=>API.delete(`/video/clearhistory/${userId}`);


export const postComment=(CommentData)=> API.post('/comment/post',CommentData);

export const deleteComment=(id)=> API.delete(`/comment/delete/${id}`);

export const editComment=(id,commentBody)=> API.patch(`/comment/edit/${id}`,{commentBody});

export const getAllComment=()=> API.get('/comment/get');