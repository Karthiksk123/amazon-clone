import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../Components/CheckoutProduct';
import Header from '../Components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSession } from "next-auth/react"
import Currency from 'react-currency-formatter'

function Checkout() {
  const { data: session } = useSession();  
  
  const items = useSelector(selectItems);
  const total = useSelector (selectTotal);
console.log(items);
  return (
    <div className='bg-gray-100'>
        <Header />
        <main className='lg:flex max-w-screen-2xl flex-row mx-auto'>
          <div className='m-5 shadow-sm '>
          <Image
            src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/Jupiter/phase3/P3_EventHeader_PC_UNREC_eng.jpg'
            height={250}
            width={1020}
            objectFit="contain"
          />
          </div>
          <div className='flex flex-col bg-white m-5 my-12 p-10 shadow-md justify-center'>
          <>
            <h2>Subtotal ({items.length}) items : </h2>
            <span className='font-bold'>
            <Currency quantity={total} currency="INR"/>
            </span>
        <button disabled={!session}
        className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
        {!session ? "sign in to checkout": "Proceed to Checkout"}
            </button>
          </>
        </div>
        </main>

          <div className='flex flex-col  p-5 space-y-10 bg-white '>
            <h1 className='text-3xl pb-4 border-b'> {items.length === 0 ? "Your Amazon Basket is Empty ":"Shopping Basket" }</h1>
          
            {items.map((item,i) => (
            <CheckoutProduct
              KEY={i}
              ID={item.Id}
              TITLE={item.Title}
              RATING={item.Rating}
              PRICE={item.Price}
              DESCRIPTION={item.Description}
              CATEGORY={item.Category}
              IMAGE={item.Image}
              HASPRIME={item.hasPrime}
            />
          ))
          }  
          
          
          </div>

          
        
    </div>
  )
}

export default Checkout