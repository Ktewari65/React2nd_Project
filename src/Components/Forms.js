import React,{useState} from "react";
const Forms =(props)=>{
    const[name,setName] = useState('')
    const[description,setdescription] = useState('')
    const[price,setPrice] = useState()
    const nameHandler = (event) =>{
        setName(event.target.value)
    }
    const descriptionHandler = (event) =>{
        setdescription(event.target.value)
    }

    const priceHandler=(event)=>{
        setPrice(event.target.value)
    }

    const submitHandler =(event)=>{
    event.preventDefault();
    const obj={
        key:Math.random(),
        name:name,
        des:description,
        price:price,
           }
    setName('')
    setdescription('')
    setPrice('')

    props.sendItems(obj)
   
    }
  return (
    
        <form onSubmit={submitHandler}>
            <label>CandyName</label>
            <input type='text' onChange={nameHandler}></input>
            <label>Description</label>
            <input type='text'  onChange={descriptionHandler}></input>
            <label>Price</label>
            <input type='number' min={1}  onChange={priceHandler} ></input>
            <button>Add </button>
        </form>
  )

}

export default Forms