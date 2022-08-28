import React from 'react';
import { useNavigate } from "react-router";
import picture from "../assests/Housing6.jpg" 
// import interior from "../assests/interior-removebg-preview.png"

function LandingPage() {
  const navigate  = useNavigate()
  const GetStarted =()=>{
    navigate("/SignUp")
  }
    return (
        <div className="LandingPage">
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   <h4>INTERIOR FURNITURE DESIGN</h4>
   {/* <img src={interior} alt="" /> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
  </div>
</nav>
         <div className="container">
             <div id="firstBody">
                
             <div id="pictureFrame">
                 <img src={picture} alt="" id='picture' />
          </div> 
             </div>
             <div id="writings">
                 <h1 id="write">Elegance In <br />Interior Design.</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni quibusdam quam omnis aliquid neque culpa repudiandae explicab we make your home better. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam in blanditiis perferendis, et reiciendis? Lorem ipsum dolor sit amet.</p>
                 <button onClick={GetStarted} className="btn btn-success btn-lg">GET STARTED</button>
         </div>
             
    </div>    
        </div>
    )
}

export default LandingPage;
