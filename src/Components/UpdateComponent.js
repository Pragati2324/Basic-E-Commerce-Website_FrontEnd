import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function UpdateComponent() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  //const [error,setError]=useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails();
  }, [])
  const getProductDetails = async () => {
      console.warn(params);
      let result = await fetch(`http://localhost:5000/product/${params.id}`);
      result = await result.json();
      console.warn(result);
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setBrand(result.brand);
  }

  const pName = (e) => {
    setName(e.target.value);
  }
  const pPrice = (e) => {
    setPrice(e.target.value);
  }
  const pCategory = (e) => {
    setCategory(e.target.value);
  }
  const pBrand = (e) => {
    setBrand(e.target.value);
  }

  const updateProduct = async () => {
    console.warn({ name, price, category, brand });
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, brand }),
      headers: {
        "Content-Type": "Application/json"
      }
    })
    result = await result.json();
    if (result) {
      navigate('/')
    }
  }
  return (
    <div className='product'>
      <h1>Update Product</h1>
      <input type='text' placeholder='Enter Product Name' className='inputBox' onChange={pName} value={name} />
      <input type='text' placeholder='Enter Product Price' className='inputBox' onChange={pPrice} value={price} />
      <input type='text' placeholder='Enter Product Category' className='inputBox' onChange={pCategory} value={category} />
      <input type='text' placeholder='Enter Product Brand' className='inputBox' onChange={pBrand} value={brand} />
      <button onClick={updateProduct} className='appButton' >Update Product</button>
    </div>
  )
}

export default UpdateComponent;
