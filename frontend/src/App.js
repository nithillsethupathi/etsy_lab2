import Layout from './components/Layouts/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/auth" element={<Auth/>} />
        </Routes>
      </Layout>
    </div>
    </BrowserRouter>
  )
}

export default App;
