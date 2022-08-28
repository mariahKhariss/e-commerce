import React from 'react'
import deco1 from "../assests/pic.jfif";
import deco2 from "../assests/Housing2.jfif";
import rug4 from "../assests/rug4.jpeg";
import rug2 from "../assests/rug2.jpeg";
import rug3 from "../assests/rug3.jpeg";
import rug1 from "../assests/rug1.jpeg";
import pillow1 from "../assests/pillow1.jpeg";
import pillow2 from "../assests/pillow2.jpeg";
import pillow3 from "../assests/pillow3.jpeg";
import pillow4 from "../assests/pillow4.jpeg";
import chair1 from "../assests/chair1.jpeg";
import chair2 from "../assests/chair2.jpeg";
import chair3 from "../assests/chair3.jpeg";

function HomePage() {
    return (
        <>
           <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <i class="fa-regular fa-cart-shopping"></i>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                {/* <hr className="dropdown-divider"/> */}
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
      <section className="container-fluid">
         <div>
         <img src={deco2} alt="" id="pic" />
          <h1  href="#" id="textICon">INTERIOR <br /> FURNITURE DESIGN</h1> 
         </div>
          <div className="row">
              <div className="col-4 w-25">

              </div>
          </div>
                {/* rug section  */}
          <div className="d-flex">
          <div className="col-10 col-md-3 m-auto my-sm-3">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img src={rug3} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$300</h6>
                    <p className="card-title">Foot Rug</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>

          <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img src={rug2} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$500</h6>
                    <p className="card-title">Foot Rug</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
          <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img height="455" src={rug4} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$600</h6>
                    <p className="card-title">Foot Rug</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
          <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img height="455" src={rug1} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$300</h6>
                    <p className="card-title">Foot Rug</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
          </div>
                {/* pillows section  */}
            <div className="d-flex">
            <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img src={pillow1} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$500</h6>
                    <p className="card-title">Comfy Pillows</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
          <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img height="450" src={pillow2} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$600</h6>
                    <p className="card-title">Comfy Pillows</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
          <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img src={pillow3} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$700</h6>
                    <p className="card-title">Comfy Pillows</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
          <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img height="450" src={pillow4} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$400</h6>
                    <p className="card-title">Comfy Pillows</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
            </div>
            {/* chairs section */}
            <div className="d-flex">
            <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img src={chair1} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$900</h6>
                    <p className="card-title">Sofa Chair</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div> <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img src={chair2} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$800</h6>
                    <p className="card-title">Sofa Chair</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div> <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img height="300" src={chair3} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$1500</h6>
                    <p className="card-title">Sofa Chair</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div> <div className="col-10 col-md-3 m-auto my-sm-3 ">
             <div className="mx-2 shadow br p-1 p-md-3 card">
                <img src={chair2} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">I'M A PRODUCT</h6>
                    <h6 className="card-title">$800</h6>
                    <p className="card-title">Sofa Chair</p>
                    <button className="btn btn-success" type="submit">ADD TO CART</button>
                </div>
             </div>
          </div>
            </div>
          
          </section>     
        </>
    )
}

export default HomePage
