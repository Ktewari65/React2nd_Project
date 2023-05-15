import { useState } from "react"
import AuthContext from "./AuthContext"

const AuthProvider =(props)=>{
    const[cart,setCart] = useState([])
    const[cartValue, setCartValue]= useState(0)

    const addItemHandler =(item)=>{
        setCart([...cart, item])
        setCartValue(cart.length+1)
       // console.log(cartValue)
    }
    
    const addItem1Handler =(item) =>{
        setCart([...cart, item])
      setCartValue(cart.length+2)
    }

    const addItem3Handler =(item) =>{
        setCart([...cart, item])
      setCartValue(cart.length+3)
    }

    const cartItems={
        items:cart,
        addItem1:addItem1Handler,
        addItem:addItemHandler,
        addItem3:addItem3Handler,
        message:'Add Items',
        cartValue:cartValue
    }
    return (

<AuthContext.Provider  value={cartItems}>
    {props.children}
</AuthContext.Provider>
    )
}

export default AuthProvider