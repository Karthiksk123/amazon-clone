import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import Currency from 'react-currency-formatter'



const MAX_RATING=5;
const MIN_RATING=3

function Product({Id,Title,Description,Category,Price,Image}) {
  const[Rating]= useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )

  const [hasPrime] = useState(Math.random() < 0.5);
  
    return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className='absolute top-2 right-2 text-xs italic text-gray-400 '>{Category}</p>
        <div className='flex h-200 w-200 flex-1 '>
        <img className='flex-1 self-center object-scale-down h-40 w-20' src={Image}/>
        </div>
        <h4 className='my-3 '>{Title}</h4>
        <div className='flex '>
        {Array(Rating).fill().map((_,i)=>(
            <StarIcon className='h-5 text-yellow-500'/>
        ))}
        </div>
        <p className='my-2 text-xs line-clamp-2'>{Description}</p>
       <div className='mb-5'>
        <Currency quantity={Price} currency="INR"/>
       </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5 mb-5'>
          <img className='w-8 h-3' src="/prime-logo.png" alt=""/>
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product