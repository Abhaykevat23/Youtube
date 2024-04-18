import * as api from '../api'
export const addToLikedVideos=(likedVideoData)=>async(dispatch)=>{
    try {
        const { data } = await api.addToLikedVideos(likedVideoData);
        dispatch({ type: "POST_LIKEDVIDEO", data });
        dispatch(getAllLikedVideo())
    } catch (error) {
        console.log(error);
    }
}

export const getAllLikedVideo=()=> async (dispatch)=>{
    try {
        const { data }=await api.getAllLikedVideo();
        dispatch({type:"FETCH_ALL_LIKED_VIDEOS",payload : data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteLikedVideo=(likedVideoData)=> async (dispatch)=>{
    try {   
        const {videoId,Viewer}=likedVideoData;
        api.deleteLikedVideo(videoId,Viewer);
        dispatch(deleteLikedVideo())
    } catch (error) {
        console.log(error)
    }
}