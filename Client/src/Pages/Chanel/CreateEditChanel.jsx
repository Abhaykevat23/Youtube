import React,{useState} from 'react'
import './CreateEditChanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../actions/chanelUser';
function CreateEditChanel({setEditCreateChanelBtn}) {

    // const CurrentUser = {
    //     result: {
    //         email: "abhaykevat23@gmail.com",
    //         joinedon: "twgug2t92yet2bdwq",
    //     },
    // };
  const CurrentUser = useSelector(state => state.currentUserReducer);

    const [name, setname] = useState(CurrentUser?.result.name);
    const [desc, setdesc] = useState(CurrentUser?.result.desc);
    const dispatch=useDispatch();
    const handleSubmit=()=>{
        if (!name) {
            alert("Please Enter Name.");
        }
        else if(!desc){
            alert("Please Enter Description.");
        }
        else{
            dispatch(updateChanelData(CurrentUser?.result._id,{
                name:name,
                desc:desc,
            }));
            setEditCreateChanelBtn(false);
            setTimeout(()=>{
                dispatch(login({email:CurrentUser?.result.email}))
            },5000);
        }
    }

    return (
        <div className='container-CreateEditChanel'>
            <input onClick={()=>setEditCreateChanelBtn(false)} type="submit" value={"X"} className='ibtn-x' />
            <div className='container2-CreateEditChanel'>
                <h1>
                    {
                        CurrentUser?.result.name ? <>
                            Edit
                        </> : <>
                            Create
                        </>
                    }
                     Your Chanel
                </h1>

                <input type="text" placeholder="Enter Your Chanel Name" className="ibox" name='text' value={name} onChange={(e)=>setname(e.target.value)} />

                <textarea placeholder={"Enter Chanel Description"} className='ibox' rows={"15"} value={desc} onChange={(e)=>setdesc(e.target.value)}></textarea>
                <input type="submit" value="Submit" className='ibtn' onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default CreateEditChanel