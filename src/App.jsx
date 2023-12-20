import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Order from './pages/Order'
import AddProduct from './pages/AddProduct'
import DetailsPage from './pages/DetailsPage'
import Listing from './pages/Listing'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Dashboard} />
        <Route path='/order' Component={Order} />
        <Route path='/addproduct' Component={AddProduct} />
        <Route path='/addproduct/:id' Component={DetailsPage} />
        <Route path='/addproduct/:id/listing' Component={Listing} />
      </Routes>
    </BrowserRouter>
    <Toaster />
    </>
  )
}

export default App
