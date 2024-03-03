import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ProductDetailt() {

    const {id} = useParams(); 
    const {data} = useSelector(state => state.data); 

    const dataPrd = data?.find(item => item.id === parseInt(id)); 

    const {name,desc,price,url} = dataPrd

  return (
    <div className='pt-5 flex justify-center gap-5 '>
        <img className='w-1/2 md:w-1/3' src={url} alt="" />
        <div>
        <p>{name}</p>
        <p>{desc}</p>
        <p>${parseInt(price).toFixed(2)}</p>
        </div>
  
    </div>
  )
}

export default ProductDetailt