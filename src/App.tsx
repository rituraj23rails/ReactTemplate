import './App.css';
import Dashboard from './app/screens/Dashboard/DashboardController';
import Home from './app/screens/Home/Home';
import RestaurantHome from './app/screens/RestaurantHome/RestaurantHome';
import SignIn from './app/screens/SignIn/SignIn';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<RestaurantHome />} />
      </Routes>
  );
}

export default App;
