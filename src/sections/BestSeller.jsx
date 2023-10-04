import React from 'react'
import { products } from '../constants'
import BestSellerCard from '../components/BestSellerCard'

const BestSeller = () => {
  return (
    <section id='bestsellers' className=' max-container max-sm:mt-12'>
      <div className=' flex flex-col justify-normal gap-5'>
        <h2 className=' text-4xl font-palanquin font-bold'>
          Best
        <span className=' text-coral-red'> Seller</span>
        </h2>
        <p className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after selection. Discover a world of comfort, designn and value</p>
      </div>
      {/* product */}
      <div className=' mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map(( product) => (
          <BestSellerCard
          key = {product.name} {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default BestSeller