import React from 'react'
import "./style.css"
import img from "../assets/headerimage.jpg"
import vdo from "../assets/animeVDO.mp4"

const Header = () => {
  return (
    <>
    <div className='flex justify-center items-center w-[100%]'>
        <div className='flex'>
            <video  src={vdo} autoPlay loop muted></video>
            {/* <img src={img} alt="" /> */}
        </div>
    </div>
    </>
  )
}

export default Header