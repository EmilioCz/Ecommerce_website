{/* necessary imports such as React, useContext, useEffect, useState, and ShopContext */}
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

{/* RelatedProducts component is used to display the related products based on the category and subcategory of the product. */}
const RelatedProducts = ({category, subCategory}) => {

    {/* useContext is used to access the ShopContext which contains the products */}
    const {products} = useContext(ShopContext);

    {/* useState is used to manage the state of the related products */}
    const [related, setRelated] = useState([]);

    {/* useEffect is used to filter the products based on the category and subcategory */}
    useEffect(() => {
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=>category===item.category);
            productsCopy = productsCopy.filter((item)=>subCategory===item.subcategory);

            setRelated(productsCopy.slice(0,5));
        }

    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

            ))}

        </div>
      
    </div>
  )
}

export default RelatedProducts