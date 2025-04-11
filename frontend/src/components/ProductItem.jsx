{/* necessary imports such as React, useContext, and ShopContext */}
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

{/* ProductItem component is used to display the product information such as image, name, and price.*/}
const ProductItem = ({id,image,name,price}) => {
  {/* useContext is used to access the ShopContext which contains the currency */}
    const {currency} = useContext(ShopContext);

  return (
    /* Link is used to navigate to the product page when the product item is clicked. */
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}> 
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
