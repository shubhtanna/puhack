
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/user_profile" element={<UserProfile/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
