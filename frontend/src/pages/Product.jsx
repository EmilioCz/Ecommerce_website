{/* necessary imports */}
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

{/* Product component renders the product page of the website and organizes in a logical structure (top to bottom) that is easy for the user */}
const Product = () => {
  
  {/* useParams is used to get the productId from URL*/}
  const {productId} = useParams();

  {/* useContext is used to access the ShopContext which contains the products, currency, addToCart functions */}
  const {products, currency, addToCart} = useContext(ShopContext);

  {/* useState is used to manage the productData, image and size states */}
  const [productData, setProductData] = useState(false);

  {/* image is used to manage the selected image */}
  const [image, setImage] = useState('');

  {/* size is used to manage the selected size */}
  const [size, setSize] = useState('');

 
  const fetchProductData = async () => {
    {/* fetch product data from the products array based on the productId */}
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }

    })

  }

  {/* useEffect is used to fetch the product data whenever the productId or products state changes */}
  useEffect(()=>{
    fetchProductData();

  },[productId, products])
  {/* return page content or dont if there is no productData */}
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product DATA */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/*Product Info such as price, rating and description*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.dullstar_icon} alt="" className='w-3.5' />
            <p className='pl-2'>(10,777)</p>
            
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-t text-gray-600 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-300 ${item == size ? 'border-red-500': ''}`} key={index}>{item}</button>
              ))}

            </div>
          </div>

          {/* Add to cart button and other information */}
          <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Customers love our instruments, and rate this product 4 out of 5 stars!</p>
            <p>Instrument quality is guaranteed.</p>
            <p>30-day return policy</p>
          </div>
        </div>

      </div>
      {/*descripiton and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (10K+)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>These instruments are packaged & sold with care and love. Each instrument provides rich sounds </p>
          <p>Each instrument comes in a few of sizes for everyone to enjoy.</p>      
        </div>
      </div>

      {/* Display Related */}
      <RelatedProducts category={productData.category} subCategory={productData.subcategory} />

      
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
