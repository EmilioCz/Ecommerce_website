{/* necessary imports such as React, useContext, and ShopContext */}
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

{/* CartTotal component renders the cart total of the website and organizes in a logical structure (top to bottom) that is easy for the user
  utilizing Title component */}
const CartTotal = () => {
  {/* useContext is used to access the ShopContext which contains the products and currency */}
    const {currency,delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
      {/* displays the cart total title and a horizontal line below it */}
      <div className='text-2xl'> 
        <Title text1={'CART'} text2={'TOTAL'}/>
      </div>

      {/* displays the cart total information such as subtotal, shipping fee, and total */}
      <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total including tax (tax rate: 0.085)</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : ((getCartAmount() + delivery_fee)*1.085).toFixed(2)}</b>
            </div>
      </div>
    </div>
  )
}

export default CartTotal
