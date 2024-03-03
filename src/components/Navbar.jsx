import React from 'react'

import {MdAddToPhotos} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { handleClick } from '../redux/modalSlice';
import { searchDataFunc, sortingDataFunc } from '../redux/dataSlice';
import { Link } from 'react-router-dom';

function Navbar() {

    const dispatch = useDispatch(); 
    const {modal} = useSelector(state => state.modal); 

  


  return (
    <div className='p-5 border-b border-slate-200 flex items-center justify-between'>
        <Link to={'/'}  className='text-2xl font-bold text-[#A79BFD]'>
            Producty
        </Link>
        
        <div className='w-1/3 hidden md:flex items-center justify-between py-1 border-b border-slate-400'>
        <input onChange={(e)=>dispatch(searchDataFunc(e.target.value))} type="text" 
        placeholder='Search...' 
        className='p-1  outline-none w-11/12 bg-transparent text-white ' />
        <FaSearch/>
</div>
<div className='flex items-center justify-center gap-5'>
    <select onChange={(e) => dispatch(sortingDataFunc(e.target.value))} className='border border-[#A79BFD] text-[#A79BFD] rounded-md bg-transparent  outline-none p-1 cursor-pointer'>
        <option  value="asc">Low to High</option>
        <option  value="desc">High to Low</option>
    </select>


    <MdAddToPhotos onClick={() => dispatch(handleClick())} className='text-2xl cursor-pointer' />


</div>
        


    </div>
  )
}

export default Navbar