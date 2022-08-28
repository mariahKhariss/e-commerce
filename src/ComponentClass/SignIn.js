import React from 'react'
import {useState} from "react"
import { useNavigate } from "react-router";
import deco from "../assests/interior decor.png"
function SignIn() {
    const [Email, setEmail] = useState("")
    const [passWord, setpassWord] = useState("")
    const [allDetails, setallDetails] = useState([])
    const changesetEmail = (e) => {
        setEmail(e.target.value)
    }
    const changesetpassWord = (e) =>{
        setpassWord(e.target.value)
    }
    
    const navigate  = useNavigate()
    const Login=()=>{
        let newUser = {Email,passWord}
        setallDetails(()=>{
            let recentDetails =([...allDetails,newUser])
            localStorage.allUser = JSON.stringify(recentDetails)
            return recentDetails
        })
        // navigate('/HomePage')
    }
    return (
        <>
           <div className="App">
        <div id="picture">
            <div id="totalBody">
         <div className=" col-sm col-sm-3 m-auto p-1 mt-sm-5" >
        <div className="card shadow m-auto p-1 "> 
        <div className="card-body">
            <div>
            <img src={deco} alt="" id="image" />
              </div> 
                <div className="form-floating mb-1 my-2 ">
                    <input type="email" placeholder="Email" class="form-control" id="floatingPassword" onChange={(e)=>setEmail(e.target.value)}/>
                    <label For="floatingpassword">Email</label>
                </div>
                <div className="form-floating mb-1 my-2 ">
                    <input type="password" placeholder="Password" class="form-control" id="floatingPassword" onChange={(e)=>setpassWord(e.target.value)}/>
                    <label For="floatingpassword">Password</label>
                </div>
                
                <div>
                    <button onClick={Login} className="btn w-100 my-2 bg-success text-light">LOG IN</button>
                </div>
          </div>
            </div>
            </div> 
            </div> 

            </div>

    </div>
 
        </>
    )
}

export default SignIn
