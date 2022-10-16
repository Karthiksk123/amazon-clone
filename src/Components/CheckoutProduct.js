import Image from 'next/image'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Currency from 'react-currency-formatter'
import { removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';



function CheckoutProduct({
    KEY,
    ID,
    TITLE,
    PRICE,
    RATING,
    DESCRIPTION,
    CATEGORY,
    IMAGE,
    HASPRIME,
}) {

const dispatch = useDispatch();

const removeItemFromBasket = () => {
  dispatch(removeFromBasket({ID}))
}

  return (
    <div className='grid grid-cols-5 '>
    <Image src={IMAGE} width={200} height={200} objectFit="contain" />
        {/* <img src={IMAGE} alt="" /> */}
        <div className='col-span-3 mx-5'>
          <p>{TITLE}</p>
          <div className='flex'>
          {Array(RATING).fill().map((_,i)=>(
            <StarIcon className='h-5 text-yellow-500'/>
        ))}
          </div>
          <p className='line-clamp-3 text-xs my-2'>
          {DESCRIPTION}</p>
          <Currency quantity={PRICE} currency="INR"
          />
          <div className='my-5'>
          {HASPRIME && (
        <div className='flex items-center space-x-2 -mt-5 mb-5'>
          <img className='w-8 h-3' src="/prime-logo.png" alt=""/>
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
          </div>
         
        </div>
        <div className='flex flex-col my-auto justify-self-end'>
          <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
        </div>
        
    </div>
    
  )
}

export default CheckoutProduct