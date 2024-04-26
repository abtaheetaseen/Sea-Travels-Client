import React from 'react'
import { Link } from 'react-router-dom';
import banner1 from "../components/banner1.json"
import banner2 from "../components/banner2.json"
import banner3 from "../components/banner3.json"
import banner4 from "../components/banner4.json"
import Lottie from 'lottie-react';

const Banner = () => {

  return (

<div className="carousel w-full">

  <div id="slide1" className="carousel-item relative w-full">

  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-9/12 mx-auto my-5 gap-5"
      >
        

        <div className='flex items-center justify-center'>
          <div>
            <h1 className='text-3xl font-bold text-center mb-3'>SEA - South East Asia</h1>
            <p className='text-center mb-3'>Once the Travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.</p>
            <div className='flex items-center justify-center'>
            <Link>
              <button className='btn btn-error btn-sm text-white'>
                Explore Now
              </button>
            </Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Lottie animationData={banner1}/>
        </div>
  
</div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide2" className="carousel-item relative w-full">
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-9/12 mx-auto my-5 gap-5"
      >
        

        <div className='flex items-center justify-center'>
          <div>
            <h1 className='text-3xl font-bold text-center mb-3'>Sandy Toes sunkissed nose.</h1>
            <p className='text-center mb-3'>At the end of the day your feet should be dirty, your hair messy and your eyes sparkling. Live your life by a compass, not a clock.</p>
            <div className='flex items-center justify-center'>
            <Link>
              <button className='btn btn-error btn-sm text-white'>
                Explore Now
              </button>
            </Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Lottie animationData={banner2}/>
        </div>
  
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide3" className="carousel-item relative w-full">
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-9/12 mx-auto my-5 gap-5"
      >
        

        <div className='flex items-center justify-center'>
          <div>
            <h1 className='text-3xl font-bold text-center mb-3'>Always take the scenic road.</h1>
            <p className='text-center mb-3'>Travel opens your heart, broadens your mind, and fills your life with stories to tell. Don't let fear get in the way of the life you are meant to live.</p>
            <div className='flex items-center justify-center'>
            <Link>
              <button className='btn btn-error btn-sm text-white'>
                Explore Now
              </button>
            </Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Lottie animationData={banner3}/>
        </div>
  
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 



  <div id="slide4" className="carousel-item relative w-full">
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-9/12 mx-auto my-5 gap-5"
      >
        

        <div className='flex items-center justify-center'>
          <div>
            <h1 className='text-3xl font-bold text-center mb-3'>Work, Travel, Save, Repeat.</h1>
            <p className='text-center mb-3'>Travel makes you realize that no matter how much you know, there's always more to learn.</p>
            <div className='flex items-center justify-center'>
            <Link>
              <button className='btn btn-error btn-sm text-white'>
                Explore Now
              </button>
            </Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Lottie animationData={banner4}/>
        </div>
  
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>
  )
}

export default Banner
