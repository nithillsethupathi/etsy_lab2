import Layout from './components/Layouts/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Profile from './components/Profile/Profile'
import Sell from './components/Sell/Sell'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Profile" element={<Profile/>} />
          <Route exact path="/Shop" element={<Shop/>} />
          <Route exact path="/Sell" element={<Sell/>} />
          <Route exact path="/auth" element={<Auth/>} />
          <Route exact path="cart" element={<Cart/>} />
          <Route exact path="/items/:id" element={<ItemDetails/>} />
        </Routes>
      </Layout>
    </div>
    </BrowserRouter>
  )
}

export default App;
