import React from "react";
import img_home from "./img_Home.jpg";
// import { IconContext } from "react-icons/lib";
import "./Home.css";
// import { Link } from "react-router-dom";

function Home() {
  return (
    // <Link to='/home'>
    <section id='home'>
      <div className='img-container'>
        <img
          className='img-home'
          src='https://www.wallpapers4u.org/wp-content/uploads/building_house_cottage_style_design_49252_1920x1080.jpg'
          alt=''
        ></img>
        {/* <img className='img-home' src='img_Home' alt=''></img> */}
      </div>
    </section>
    // {/* </Link> */}
  );
}

export default Home;
