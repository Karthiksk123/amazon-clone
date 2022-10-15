import React from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Header() {
  return (
    <div>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex flex-grow  sm:flex-grow-0">
          <Image
            src="/amazon-logo.png"
            height={40}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            type="text"
          />
          <SearchIcon className=" ml-2 mr-2" />
        </div>
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link' >
            <p>Hello Karthik</p>
            <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute  top-0 right-0  h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold sm:mr-9'>0</span>

            <ShoppingCartOutlinedIcon className="h-10"/>
            <p className='hidden sm:inline font-extrabold text-sm mt-2'>Basket</p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white space-x-3 p-2 pl-6">
            <p className='link flex items-center'>
                <MenuOutlinedIcon className='h-6 mr-1'/>
            All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Basis</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>

      </div>
    </div>
  );
}

export default Header;
