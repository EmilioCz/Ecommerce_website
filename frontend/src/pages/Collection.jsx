{/* necessary imports */}
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

{/* Collection component renders the collection page of the website and organizes in a logical structure (top to bottom) that is easy for the user*/}
const Collection = () => {
  {/* useContext is used to access the ShopContext which contains the products, search, showSearch and setShowSearch functions */}
  const {products, search , showSearch} = useContext(ShopContext);

  {/* useState is used to manage the showFilter, filterProducts, category, subCategory and sortType states */}
  const [showFilter, setShowFilter] = useState(false);

  {/* filterProducts is used to manage the filtered products */}
  const [filterProducts, setFilterProducts] = useState([]);

  {/* category is used to manage the selected categories */}
  const [category, setCategory] = useState([]);
  
  {/* subCategory is used to manage the selected subcategories */}
  const [subCategory, setSubCategory] = useState([]);

  {/* sortType is used to manage the selected sorting type */}
  const [sortType, setSortType] = useState('relevant');
  
  {/* toggleCategory is used to manage the selected categories */}
  const toggleCategory = (e) => {
    {/* if the category is already selected, remove it from the category array, else add it to the category array */}
    if (category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value));

    }
    /* if the category is not already selected, add it to the category array */
    else{
      setCategory(prev=> [...prev, e.target.value]);
    }

  }
  /* toggleSubCategory is used to manage the selected subcategories */
  const toggleSubCategory = (e) => {
    /* if the subcategory is already selected, remove it from the subcategory array, else add it to the subcategory array */
    if (subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value));

    }
    /* if the subcategory is not already selected, add it to the subcategory array */
    else{
      setSubCategory(prev=> [...prev, e.target.value]);
    }

  }
  /* applyFilter is used to filter the products based on the selected categories, subcategories and search term */
  const applyFilter = () => {
    let productsCopy = products.slice();
    /* if the search term is not empty, filter the products based on the search term */
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    /* if the category array is not empty, filter the products based on the selected categories */
    if (category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    /* if the subcategory array is not empty, filter the products based on the selected subcategories */
    if (subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subcategory));
    }
    
    setFilterProducts(productsCopy);



  }

  /* sortProduct is used to sort the products based on the selected sorting type (low to high, high to low, relvant)*/
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    /* if the sortType is 'relevant', do not sort the products */
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }
 /* useEffect is used to apply the filter and sort the products whenever the category, subCategory, search and showSearch states change */
  useEffect(()=>{
    applyFilter();

  }, [category, subCategory, search, showSearch]);
  
  /* useEffect is used to sort the products whenever the sortType state changes */
  useEffect(()=>{
    sortProduct();
  },[sortType])

  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filter options*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/*Category filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'String'} onChange={toggleCategory} /> String
            </p>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Wind'} onChange={toggleCategory} /> Wind
            </p>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Remainder'} onChange={toggleCategory} /> Remainder
            </p>

          </div>

        </div>
        {/*Subcategory filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Product Types</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'BestSellers'} onChange={toggleSubCategory}/> Best Sellers
            </p>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'NotBestSellers'} onChange={toggleSubCategory}/> Not Best Sellers
            </p>

          </div>

        </div>


      </div>

      {/*Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/*Product sorting */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>

          </select>

        </div>
        {/* Mapping the Products*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }


        </div>

      </div>
      
    </div>
  )
}

export default Collection