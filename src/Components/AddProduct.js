import React, { useState } from 'react'

function AddProduct() {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [brand,setBrand]=useState("");
    const [error,setError]=useState("");
    
   

    const pName=(e)=>{
        setName(e.target.value);
    }
    const pPrice=(e)=>{
        setPrice(e.target.value);
    }
    const pCategory=(e)=>{
        setCategory(e.target.value);
    }
    const pBrand=(e)=>{
        setBrand(e.target.value);
    }
    const handleProduct=async()=>{
        if(!name || !price || !category || !brand)
        {
          setError(true);
          return false;
        }

        console.warn(name,price,category,brand);
        const userId=JSON.parse(localStorage.getItem('user'));
        console.warn(userId);
        let result=await fetch("http://localhost:5000/add-product",{
                 method:"post",
                 body:JSON.stringify({name,price,category,brand,userId}),
                 headers:{
                  "Content-Type":"application/json"
                 }
        });
        result=await result.json();
        console.warn(result);
    }

  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type='text' placeholder='Enter Product Name'  className='inputBox' onChange={pName}/>
      {error && !name &&<span className='invalid' > Enter Valid Name</span> }
      <input type='text' placeholder='Enter Product Price'  className='inputBox' onChange={pPrice}/>
      {error && !price && <span className='invalid' > Enter Valid Price</span>}
      <input type='text' placeholder='Enter Product Category'  className='inputBox' onChange={pCategory} />
      {error && !category && <span className='invalid' > Enter Valid Category</span>}
      <input type='text' placeholder='Enter Product Brand'  className='inputBox' onChange={pBrand}/>
      {error && !brand && <span className='invalid' > Enter Valid Brand</span>}
      <button onClick={handleProduct} className='appButton' >Add Product</button>
    </div>
  )
}

export default AddProduct;
