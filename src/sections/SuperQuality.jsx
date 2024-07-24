import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
<section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container '>
  <div className='flex flex-1 flex-col '>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>SuperQuality</span>
          <br></br>
          <span className='text-coral-red inline-block mt-3'>Nike</span>
          <span className='xl:bg-white inline-block mt-3 ms-2'> shoe</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Discover the latest must-have items in our Popular Products section! 
        From trendy gadgets to timeless classics, we've curated a selection of 
        top-rated products that are flying off the shelves. Whether you're looking 
        for innovative tech gadgets, stylish fashion accessories, or practical home
         essentials, you'll find something to love here. 
         Stay ahead of the curve and shop our Popular Products today!
        </p>
      <div className='mt-11'>
            <Button label='view details' />
      </div>
  </div>
  <div>
    <img className='flex-1 flex justify-center items-center' src={shoe8} alt='shoe8' height={522} width={570}></img>
  </div>

</section>  )
}

export default SuperQuality