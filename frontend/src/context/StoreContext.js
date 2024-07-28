import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../Assests/frontend_assets/assets';

export const  StoreContext = createContext(null);

export const StoreContextProvider =(props)=>{
    const [cartItem, setCartItem] = useState({});
    const addToCart =(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart =(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount =()=>{
        let totalAmount =0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo =food_list.find((product)=> product._id === item);
                totalAmount += itemInfo.price*cartItem[item];
            }
        }
        return totalAmount;
    }

    const contextValue ={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    useEffect(()=>{
        console.log(cartItem);
    },[cartItem]);
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}