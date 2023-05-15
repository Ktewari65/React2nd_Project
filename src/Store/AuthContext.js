import React from "react";
const AuthContext = React.createContext({
    items:[],
    addItem:(item)=>{},
    deleteItem:(id)=>{}
}

)

export default AuthContext