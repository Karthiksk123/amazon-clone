import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        >
        <div>
        <img loading="lazy" src="https://m.media-amazon.com/images/I/81bJftPegYL._SX3000_.png" alt="" />
        </div>
        <div>
        <img loading="lazy" src="https://m.media-amazon.com/images/I/71vcu0NPPIL._SX3000_.jpg" alt="" />
        </div>
        <div>
            <img loading="lazy" src="https://m.media-amazon.com/images/I/71FDK43IezL._SX3000_.jpg" alt="" />
        </div>
        <div>
        <img loading="lazy" src="https://m.media-amazon.com/images/I/71cn6SwNreL._SX3000_.jpg" alt="" />
        </div>
        </Carousel>
    </div>
  )
}

export default Banner