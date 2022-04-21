import Layout from './components/Layouts/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Profile from './components/Profile/Profile'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/auth" element={<Auth/>} />
          {/* <Route exact path="/profile" element={<Profile/>} /> */}
          <Route exact path="/items/:id" element={<ItemDetails/>} />
        </Routes>
      </Layout>
    </div>
    </BrowserRouter>
  )
}

export default App;
