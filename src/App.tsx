import './App.css';
import Dashboard from './app/screens/Dashboard/DashboardController';
import Home from './app/screens/Home/Home';
import SignIn from './app/screens/SignIn/SignIn';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
  );
}

export default App;
