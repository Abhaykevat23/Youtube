import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'
function ShowVideoGrid({vids}) {
  return (
    <div className='container-showvideo-grid'>
        {
            vids?.map(vi=>{
                return (
                    <div key={vi._id} className='videobox-app'>
                        <ShowVideo vid={vi} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ShowVideoGrid