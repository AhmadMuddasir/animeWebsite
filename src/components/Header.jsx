import React from 'react'
import "./style.css"
import vdo from "../assets/animeVDO.mp4"

const Header = () => {
  return (
    <>
    <div className='flex justify-center items-center w-[100%]'>
        <div className='flex'>
            <video  src={vdo} autoPlay loop muted></video>
        </div>
        <div className='absolute'>
          <h1 className='top-2 sm:w-[50%] w-[100%] p-2 m-1 sm:text-6xl text-3xl font-semibold'>stream all your <span className='text_gradient'> favourite anime </span>in one platform</h1>
        </div>
    </div>
    </>
  )
}

export default Header;