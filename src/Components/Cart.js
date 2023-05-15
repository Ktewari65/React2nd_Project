import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from './Cart.module.css'
import AuthContext from "../Store/AuthContext";
   // className={classes.button}
   //className={classes.button}


const Cart = () => {

  const ctx= useContext(AuthContext)
 // console.log(ctx.cartValue)

  //const quantitys= document.getElementById('quantity').value
  //console.log(quantitys)
  
 // let quantity =0
  // ctx.items.forEach((sum,initial) =>{
     // return quantity+
  //},0)


  return (
           
     <button  className={classes.label}>
    <span className={classes.icon}>
    
    </span>
    <span>
       {ctx.message}
    </span>
    <CartIcon/>
    <span></span>
    <span id='quantity'className={classes.badge}>
    {ctx.cartValue}
       </span>
     </button>
    
  );
};

export default Cart;