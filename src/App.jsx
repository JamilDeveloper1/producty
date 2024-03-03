import React from 'react'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import ProductDetailt from './pages/ProductDetailt'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div className='p-3'>

<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

<ToastContainer />

<Router>
  <Navbar/>
  <Modal/>
  <Routes>
  <Route path='/' index element={<Home/>} />
  <Route path='/product/:id' index element={<ProductDetailt/>} />



  </Routes>
</Router>
    </div>
  )
}

export default App