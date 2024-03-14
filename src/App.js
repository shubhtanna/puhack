
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import ShopkeeperProfile from './pages/ShopkeeperProfile';

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/user_profile" element={<UserProfile/>}/>
        <Route path="/shopkeeper_profile" element={<ShopkeeperProfile/>} />
      </Routes>
    
    </div>
  );
}

export default App;
