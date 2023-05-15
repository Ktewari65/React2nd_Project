import Forms from './Components/Forms';
import './App.css';
import List from './Components/List';
import { useState } from 'react';
import Cart from './Components/Cart';
import AuthProvider from './Store/AuthProvider';

function App() {
  const[item, setItem]= useState([])

  const itemsHandler =(items)=>{
   setItem((pre)=> {
   console.log(pre)
    return[...pre,items]
   })
  }
  return (
  <div>
    <AuthProvider>
    <Forms sendItems={itemsHandler}/>
    <List  sendToList={item}/>
    <Cart/>
  </AuthProvider>
  </div>
  );
}

export default App;
