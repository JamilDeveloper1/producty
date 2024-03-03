import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { handleClick } from '../redux/modalSlice';
import { createDataFunc, uptadeDataFunc } from '../redux/dataSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Modal() {
    const [productInfo,setProductInfo] = useState({name : "", price : "" , url : "", desc : ""})



    const dispatch = useDispatch(); 
    const {modal} = useSelector(state => state.modal); 
    const {data} = useSelector(state => state.data); 

    const navigate = useNavigate(); 
    
  const location = useLocation(); 
  let loc = (location?.search.split('=')[1]);


  useEffect(( ) => {
    if(loc){
        setProductInfo(data.find(item => item.id == parseInt(loc)))
    }
  },[loc])


    const onchangeFunc = (e , type) => {
        type == "url" ? 
        setProductInfo(prev => ({...prev, [e.target.name] : URL.createObjectURL(e.target.files[0])})) 
        : 
        setProductInfo(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const buttonFunc = (e) => {
      e.preventDefault(); 

      toast.success('Created successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


        dispatch(createDataFunc({...productInfo, id : data.length + 1})); 
        
        dispatch(handleClick());  


        navigate('/');
        setProductInfo({
          name : "", price : "", desc : ""
        })

    

    }

    
  const buttonUptadeFunc = (e) => {

    e.preventDefault(); 
    dispatch(uptadeDataFunc({...productInfo, id : parseInt(loc)}));
    dispatch(handleClick()); 

    toast.success('Edited successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    navigate('/');
}

  return (
    <div className={` ${modal ? 'scale-100' : 'scale-0'} md:w-[400px] md:h-[480px] z-50 bg-[#fff] text-[#242424] flex flex-col gap-3 w-full h-full border-2 rounded-md text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5`}>
        <div className='flex items-center justify-between'>
            <p className='text-xl md:text-2xl font-semibold'>Create Your Own Product</p>
            <FaTimes onClick={() => dispatch(handleClick()) && navigate('/')} className='text-xl cursor-pointer'/>
        </div>
        <form onSubmit={loc ? buttonUptadeFunc :  buttonFunc} className='flex  flex-col items-center  gap-3 '>
            <input value={productInfo.name} required onChange={(e) => onchangeFunc(e , "name")} name='name' className='p-2 outline-none w-full border    bg-transparent' type="text" placeholder='Product name...' />
            <textarea value={productInfo.desc} required onChange={(e) => onchangeFunc(e , "desc")} name='desc' className='outline-none  border h-1/3 bg-transparent  w-full p-2 resize-none' placeholder='Product description...' cols="30" rows="10"></textarea>
            <input value={productInfo.price} required onChange={(e) => onchangeFunc(e , "price")} name='price' className='p-2 border bg-transparent outline-none w-full' type="number" placeholder='Product price...' />
            <input required onChange={(e) => onchangeFunc(e , "url")} name='url' type="file" className=' p-2 w-full cursor-pointer' />
            <button  className=' bg-[#A79BFD] rounded-md font-semibold text-xl p-2 w-full'>
             {loc ? 'Edit Product' : 'Create'}
            </button>
        </form>

       
  </div>
  )
}

export default Modal