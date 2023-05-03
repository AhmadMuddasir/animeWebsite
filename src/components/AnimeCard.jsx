import React from 'react'
import "./style.css"
import Card from './Card';
import Card2 from './Card2';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {productData2, productData,responsive } from '../constants';

const AnimeCard = () => {

  const cardData = productData.map((item) => (
    <Card
    
      id={item.id}
      name={item.name}
      url={item.link}
      image={item.image}
      key={item.id}
    />
  ));
  const cardData2 = productData2.map((item) => (
    <Card2
    
      id={item.id}
      name={item.name}
      url={item.link}
      image={item.image}
      key={item.id}
    />
  ));

  return (
    <>
    <div className=" mx-3 mb-16" id='Movies'>
      <h1 className='text-4xl font-semibold pl-4 '>watch your <span className='text-orange-600'> favourite</span> anime Now</h1>
      <div className='line_bg w-[100%] mb-[50px]'></div>

    <div className='text-2xl font-extralight pl-4 '>popular anime recommended for you </div>
    <Carousel showDots={true} className='flex   m-1' responsive={responsive}>
    {cardData}
    </Carousel>
    <div className='text-2xl font-extralight pl-4 '>most Recently Uplaoded</div>
    <Carousel showDots={true} className='flex   m-1' responsive={responsive}>
    {cardData2}
    </Carousel>
    </div>


    </>
  )
}

export default AnimeCard