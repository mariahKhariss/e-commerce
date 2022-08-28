import { useNavigate } from "react-router";
import deco from "../assests/interior decor.png"
import { useState,useEffect } from "react";
const SignUP = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [Email, setEmail] = useState("")
    const [passWord, setpassWord] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [allDetails, setallDetails] = useState([])
    const changesetfirstName = (e)=>{
        setfirstName(e.target.value)
    }
    const changelastName =(e)=>{
        setlastName(e.target.value)
    }
    const changesetEmail =(e)=>{
        setEmail(e.target.value)
    }
    const changesetpassWord =(e)=>{
        setpassWord(e.target.value)
    }
    const changeconfirmPassword =(e)=>{
        setconfirmPassword(e.target.value)
    }
    useEffect(() => {
       if (localStorage.allUser){
           let localAllUsers = JSON.parse(localStorage.allUser)
           setallDetails(localAllUsers)
       }else{
           setallDetails([])
       }
    }, [])
    const navigate  = useNavigate()
    const SignUp =()=>{
        let newallDetails = {firstName,lastName,Email,passWord,confirmPassword}
        setallDetails(()=>{
            let recentDetails=([...allDetails,newallDetails])
            localStorage.allUser = JSON.stringify(recentDetails)
            return recentDetails
        })
        if (firstName== ''|| lastName==''|| Email==''|| passWord==''|| confirmPassword=='') {
          alert('please provide the necessary information')  
        }else{
        setfirstName('')
        setlastName('')
        setEmail('')
        setpassWord('')
        setconfirmPassword('')
        navigate("/SignIn")
        }
    }
    return ( 
        <div className="App">
        <div id="picture">
         <div className=" col-sm col-sm-3 m-auto p-1 mt-sm">
        <div className="card shadow m-auto p-1 "> 
        <div className="card-body">
            <div>
            <img src={deco} alt="" id="image" />
                <h4 className="text-success ">Create An Account</h4>
              </div> 
                <div className="form-floating mb-1 my-3 ">
                    <input type="text" placeholder="First Name" class="form-control" id="floatingInput" onChange={(e)=>setfirstName(e.target.value)} value={firstName}/>
                    <label For="floatingpassword">First Name</label>
                </div>
                <div className="form-floating mb-1 my-2 ">
                    <input type="text" placeholder="Last Name" class="form-control" id="floatingPassword" onChange={(e)=>setlastName(e.target.value)} value={lastName} />
                    <label For="floatingpassword">Last Name</label>
                </div>
                <div className="form-floating mb-1 my-2 ">
                    <input type="email" placeholder="Email" class="form-control" id="floatingPassword" onChange={(e)=>setEmail(e.target.value)} value={Email}/>
                    <label For="floatingpassword">Email</label>
                </div>
                <div className="form-floating mb-1 my-2 ">
                    <input type="password" placeholder="Password" class="form-control" id="floatingPassword" onChange={(e)=>setpassWord(e.target.value)} value={passWord}/>
                    <label For="floatingpassword">Password</label>
                </div>
                <div className="form-floating mb-1 my-2 ">
                    <input type="password" placeholder="Confirm Password" class="form-control" id="floatingPassword" onChange={(e)=>setconfirmPassword(e.target.value)} value={confirmPassword}/>
                    <label For="floatingpassword">Confirm Password</label>
                </div>
                <div>
                    <button className="btn w-100 my-2 bg-success text-light" onClick={SignUp}>CREATE ACCOUNT</button>
                </div>
          </div>
            </div> 
            </div> 

            </div>

    </div>
     );
}
 
export default SignUP;