import React from 'react'
import "./style.css"
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import SmartDisplayTwoToneIcon from '@mui/icons-material/SmartDisplayTwoTone';

const Image = () => {
  return (
    <div className="mx-4  my-8">
      <div className="line_bg w-[100%] mb-2"></div>
      <div className='flex justify-center items-center sm:flex-row flex-col mx-8'>

        <div className='object-cover justify-center items-center sm:w-[200%] w-[130%] lg:p-1  p-3 m-1'>
          <a href="https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga?utm_source=cap_cr&utm_medium=carousel_2&utm_campaign=vinland_en&referrer=cap_cr_carousel_2_vinland_india">
          <img src="https://static.crunchyroll.com/fms/desktop_large/1050x350/4f25de3c-f8d3-4a10-b153-e1d84b49fe41.png" alt="img" />
          </a>
        </div>
        <div className='flex justify-center items-center w-[100%] flex-col sm:flex-row p-1 m-1'>
        <button className='sm:text-xl text-sm sm:w-[204px] w-[45%] font-bold py-[0.6rem] m-1 bg-orange-700 '>start Streaming <SmartDisplayTwoToneIcon className='text-white' /> </button>
        <button className='sm:text-xl text-sm sm:w-[204px] w-[45%] font-bold py-1 m-1 border-solid border-4
       border-orange-700 border-y-orange-500  text-orange-700'>Watch Later<BookmarkTwoToneIcon className='text-orange-700'/></button>
        </div>
      </div>
    </div>
  )
}

export default Image