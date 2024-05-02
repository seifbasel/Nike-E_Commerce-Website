import React from 'react'
import {star} from '../assets/icons'
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px]'>
      </img>
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating"width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.7)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold'>{name}</h3>
      <p className='font-montserrat mt-2 text-2xl text-coral-red leading-normal '>{price}</p>
    </div>
  )
}

export default PopularProductCard