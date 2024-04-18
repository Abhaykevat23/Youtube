import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import './DescribeChanel.css'
function DescribeChanel({ setEditCreateChanelBtn, cid , setvideoUploadPage}) {

    const chanels = useSelector(state => state?.chanelReducers);
    // console.log(chanels);
    const currentChanel = chanels.filter(c => c._id === cid)[0];
    // console.log(currentChanel);
    const CurrentUser = useSelector(state => state?.currentUserReducer);

    return (
        <div className='container3-chanel'>
            <div className="chanel-logo-chanel">
                <b>
                    {
                        currentChanel?.name.charAt(0).toUpperCase()
                    }
                </b>
            </div>
            <div className="description-chanel">
                <b> {currentChanel?.name} </b>
                <p> {currentChanel?.desc} </p>
            </div>

            {
                CurrentUser?.result._id === currentChanel?._id && <>
                    <p className='editbtn-chanel' onClick={() => { setEditCreateChanelBtn(true) }} >
                        <FaEdit />
                        <b> Edit Chanel </b>
                    </p>
                    <p className='uploadbtn-chanel' onClick={()=>setvideoUploadPage(true)}>
                        <FaUpload />
                        <b> Upload Video </b>
                    </p>
                </>
            }


            

        </div>
    )
}

export default DescribeChanel