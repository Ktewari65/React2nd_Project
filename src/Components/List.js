import React, { useContext } from "react";
import AuthContext from "../Store/AuthContext";
const List =(props)=>{
      const ctx = useContext(AuthContext)

  
    return(
        <div>
            <ul>
                {props.sendToList.map((item)=>(
            [<li key={item.key}>
                {item.name} - {item.des} - {item.price}
                <button  onClick={()=>{ctx.addItem(item)}}>Buy 1</button>
                <button   onClick={()=>{ctx.addItem(item)}}>Buy 2</button>
                <button onClick={()=>{ctx.addItem3(item)}} >Buy 3</button>
                </li>]
                ))}
            </ul>
        </div>
    )
}
export default List