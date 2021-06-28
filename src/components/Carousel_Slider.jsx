import React from 'react';
import Slider from 'infinite-react-carousel';
import './style.css'
export default function Carousel_Slider({data}){
 return(
      <Slider  className='sidebar-img' autoplay duration={100} arrows={false}>
        {data?.map(i=> <img alt='img' src={i.url} />)}
    </Slider>
    )
}

