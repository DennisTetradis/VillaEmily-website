import React from "react";
import { FaParking, FaWifi, FaTv, FaFire } from "react-icons/fa";
import { RiParkingFill } from "react-icons/ri";
import {
  GiGardeningShears,
  GiWashingMachine,
  GiFrostfire,
} from "react-icons/gi";
import { MdOutlineKitchen } from "react-icons/md";
// import { MdFingerprint } from "react-icons/md";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Facilities() {
  return (
    <section className='section' id='facilities'>
      <h1 className='sectionHeader'>FACILITIES</h1>
      <div className='iconFacilities'>
        <div className='iconCombo'>
          <i className='material-icons'>
            <RiParkingFill />
          </i>
          <p className='material-text'>free PARKING</p>
        </div>
        <div className='iconCombo'>
          <i className='material-icons'>
            <GiGardeningShears />
          </i>
          <p className='material-text'>Garden</p>
        </div>
        <div className='iconCombo'>
          <i className='material-icons'>
            <FaWifi />
          </i>
          <p className='material-text'>Wifi</p>
        </div>
        <div className='iconCombo'>
          <i className='material-icons'>
            <FaTv />
          </i>
          <p className='material-text'>Smart TV</p>
        </div>
        <div className='iconCombo'>
          <i className='material-icons'>
            <MdOutlineKitchen />
          </i>
          <p className='material-text'>Fully equiped KITCHEN</p>
        </div>
        <div className='iconCombo'>
          <i className='material-icons'>
            <FaFire />
          </i>
          <p className='material-text'>BBQ</p>
        </div>
        <div className='iconCombo'>
          <i className='material-icons'>
            <GiWashingMachine />
          </i>
          <p className='material-text'>Washing machine</p>
        </div>
        <div className='iconCombo'>
          <i className='material-icons'>
            <GiFrostfire />
          </i>
          <p className='material-text'>Aircondition</p>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
