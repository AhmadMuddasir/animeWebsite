import React from 'react'
import "./style.css"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const LoginPage = () => {
  return (
   <>
   <div className='w-[full] my-8 p-2 '>
   <div className='flex flex-col sm:flex-row justify-around items-center m-1 p-1 sm:h-[300px] h-[400px] bg-slate-900 rounded-lg'>
    <div className='flex flex-col  items-start'>
      <h1 className='h1_style p-2'>Become our <span className='text_gradient '>Premium Membership </span> Now</h1>
      <p className='text-lg m-2' >login and get all the benefits is free watch all your movies in hd</p>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <button className='text-xl w-[204px] font-bold py-1 m-1 bg-orange-700 '>Buy Premium <WorkspacePremiumIcon className='text-[gold]'></WorkspacePremiumIcon></button>
      <button className='text-xl w-[204px] font-bold py-1 m-1 border-solid border-4
       border-orange-700 border-y-orange-500  text-orange-700'>Sign up</button>
    </div>
   </div>
   </div>
   </>
    
  )
}

export default LoginPage

