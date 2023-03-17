import React from 'react'
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";


const Card = (props) => {

  return (
    <>  
        <div className=' w-[100%] p-[20px]'>
        <div >
          <img className='object-cover h-[300px] w-[100%] ' src={props.image} alt="img" />

          <div className='flex flex-col justify-center items-center  mt-2  font-semibold sm:text-lg'>
          <p className='bg-orange-700 items-start p-[9px] sm:text-center w-[100%]  cursor-pointer my-1'><a href={props.url}> watch Now <PlayCircleOutlineIcon/></a> </p>
          <p className='border-solid border-4 border-orange-700 border-y-orange-500  
          text-orange-700 items-start p-[9px]  sm:text-center w-[100%]  my-1'>{props.name}</p>
          </div>
        </div>





    </div>
    </>
  )
}

export default Card