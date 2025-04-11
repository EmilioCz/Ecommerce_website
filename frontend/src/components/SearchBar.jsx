{/* necessary imports such as React, useContext, useEffect, useState, ShopContext, and useLocation */}
import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

{/* SearchBar component is used to display the search bar when the user is on the collection page.*/}
const SearchBar = () => {

    {/* useContext is used to access the ShopContext which contains the search and showSearch state */}
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    {/* useEffect is used to set the visibility of the search bar based on the current path (needs to be collection page)*/}
    useEffect(()=>{
        if (location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }

    },[location])

  {/*return if showSearch is true and visible is true, otherwise return null*/}
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center jsustify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit tedt-sm' type="text" placeholder='Search'/>
            <img className='w-4' src={assets.search_icon} alt="" />

        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.delete_icon} alt=""/>
      
    </div>
  ): null
}

export default SearchBar