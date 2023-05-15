import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-8 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={4000}>
        <div>
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/May/MFD/ATF/Unrec/15th/3000._CB590201154_.jpg" className='baner' alt='' width={40} height={40} />
        </div>
        <div>
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/acc/may23/ACCESSORIES-DAYS_3000x1200._CB588441566_.jpg" className='baner' alt='' width={40} height={40} />
        </div>
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg" className='baner' alt='' width={40} height={40} />
        </div>
        
        </Carousel>
    </div>
  )
}

export default Banner