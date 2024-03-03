import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsThreeDots} from 'react-icons/bs'
import { deleteDataFunc} from '../redux/dataSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  handleClick } from '../redux/modalSlice';

function Home() {

  const dispatch = useDispatch(); 

  const {data,keyword } = useSelector(state => state.data); 

 
  const [openBar,setOpenBar] = useState({}); 


  const navigate = useNavigate(); 

  const filteredData = data.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));


  if(data.length ===  0){
    return(
      <div className='flex flex-col-reverse md:flex-row items-center justify-around pt-20 '>
     <div className='flex flex-col md:w-1/2 gap-5'>
     <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Create and sell with <span className='text-[#A79BFD]'>Producty</span></h1>
        <p className='text-sm md:text-xl w-4/5'>
          If you are interested in for to create your own product you are in the right place.
        </p>
        <button onClick={()=>dispatch(handleClick())} className='p-2 border  md:w-1/2 rounded-lg bg-[#A79BFD] font-semibold text-[#242424] ' >Create Now</button>
     </div>
    
        <img id='bouncing-image' className=' w-4/5 md:w-[500px] ' src="background-img.png" alt="" />
      </div>
    )
  }





  const openMenuBarFunc = (id) => {
    setOpenBar(prevState => ({
      ...prevState,
      [id]: !prevState[id] 
    }));
  }

const handleEdit = (id) => {
  dispatch(handleClick()); 
  navigate(`/?uptade=${id}`);
}

  return (
    <div className='pt-5 flex flex-wrap items-center justify-center gap-5'>
      {
       filteredData?.map((item) => (
          <div key={item.id} className='w-11/12  md:w-1/4 p-1 rounded-md shadow-md shadow-[#77767621] flex-col relative'>
            <img src={item?.url} className='w-full h-[300px]  rounded-md ' alt="" />
            <p className='text-lg py-1 underline'>{item?.name}</p>
            <p className='py-1'>{item?.desc.substring(0,20)}...</p>
            <p className='bg-[#A79BFD] absolute top-1 rounded-md p-2'>${parseFloat(item?.price).toFixed(2)}</p>
            <BsThreeDots onClick={() => openMenuBarFunc(item.id)} className='absolute top-2 right-2 cursor-pointer text-3xl bg-[#242424] rounded-full '/>
            <div className={`${openBar[item.id] ? 'scale-1' : 'scale-0'} flex flex-col absolute top-10 right-0 bg-slate-700 p-1`}>
              <button className='flex items-start justify-start' onClick={()=>dispatch(deleteDataFunc(item.id) || openMenuBarFunc(item.id))} >Delete</button>
              <button className='flex items-start justify-start' onClick={() => handleEdit(item.id)}>Edit</button>
              <Link to={`product/${item.id}`} >Live</Link>
            </div>
          </div>
        ) )
      }
      

    </div>
  )
}

export default Home