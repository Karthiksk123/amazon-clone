import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 md:-mt-60 mx-auto '>
    {products?.slice(0,4).map(({id,title,price,description,category,image}) => (
       
         <Product 
            Key={id}
            Id={id}
            Title={title}
            Price={price}
            Description={description}
            Category={category}
            Image={image}
        />    
        
    ))}
    <div className='sm:col-span-full xl:bg-white '>
      <img className='xl:p-5 xl:ml-20' src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sept_22/Jupiter_22/Headers/P3_BFL_GW-editorial_1150x323._CB609056541_.jpg" alt="" />
    </div>
    <div className='md:col-span-2 lg:col-span-4 xl:col-span-4' >
    {products?.slice(4,5).map(({id,title,price,description,category,image}) => (
       
         <Product 
            Key={id}
            Id={id}
            Title={title}
            Price={price}
            Description={description}
            Category={category}
            Image={image}
        />    
        
    ))}
    </div>
    {products?.slice(7,products.length).map(({id,title,price,description,category,image}) => (
       
         <Product 
            Key={id}
            Id={id}
            Title={title}
            Price={price}
            Description={description}
            Category={category}
            Image={image}
        />    
        
    ))}
</div> 
  )
}

export default ProductFeed