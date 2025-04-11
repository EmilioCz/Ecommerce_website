{/* necessary imports */}
import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

{/* ShopContext is created to provide the shop context to the entire application */}
 export const ShopContext = createContext();

{/* ShopContextProvider is a functional component that does above statement */}
 const ShopContextProvider = (props) => {
    {/*currency, delivery fee are necessary hardcoded values for placeorder page/collections etc...*/}
    const currency = '$';
    const delivery_fee = 10;
    {/* useState is used to manage the products, search, showSearch and cartItems states */}
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    {/*navigate is used to navigate to different pages */}
    const navigate = useNavigate();

    {/* addToCart is used to add items to the cart checking for a selected size, and itemId matches*/}
    {/* it takes the itemId and size as parameters and updates the cartItems state */}
    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);
        
        if (!size) {
            toast.error('Please select a size!');
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }


    {/* getCartCount is used to get the total number of items in the cart */}
    {/* it loops through the cartItems and adds up the quantities of each item */}
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }

                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    {/* updateQuantity is used to update the quantity of an item in the cart */}
    {/* it takes the itemId, size and quantity as parameters and updates the cartItems state */}
    {/* it uses structuredClone to create a deep copy of the cartItems state */}
    const updateQuantity = async (itemId,size,quantity) => {
        
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    }

    {/* getCartAmount is used to get the total amount of the items in the cart */}
    {/* it loops through the cartItems and adds up the price of each item multiplied by its quantity */}
    {/* it uses the products array to get the price of each item */}
    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }

                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    
    const value  =  {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

 }

 export default ShopContextProvider;