import React from 'react';
import { Carousel } from 'react-carousel3';
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"
const style = {
    width: 100,
    height: 100,
  };


const  Companies =  () => (
    <>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: '  linear-gradient(to bottom, #135175 0%, #3f397c 100%' ,
    }}
  >
    <Carousel height={260} width={980} yOrigin={42} yRadius={48} autoPlay={true}>
      <div key={1} className='sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]'>
        <img alt="" src={img1} />
      </div>
      <div key={2} className='sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]'>
        <img alt="" src={img2} />
      </div>
      <div key={3} className='sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]'>
        <img alt="" src={img3} />
      </div>
      <div key={4} className='sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]'>
        <img alt="" src={img4} />
      </div>
      <div key={5} className='sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]'>
        <img alt="" src={img5} />
      </div>
      <div key={6} className='sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]'>
        <img alt="" src={img6} />
      </div>
    </Carousel>
  </div>
  </>
);
export default Companies
