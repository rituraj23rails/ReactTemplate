import { Routes, Route } from 'react-router-dom';
import CountryHome from './app/screens/CountryHome/CountryHome';
import CountryList from './app/screens/CountryList/CountryList';
import CountryDetails from './app/screens/CountryDetails/CountryDetails';
import RestaurantHome from './app/screens/RestaurantHome/RestaurantHome';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<CountryHome />} />
        <Route path='countrylist' element={<CountryList />} />
        <Route path='countrydetails' element={<CountryDetails />} />
        <Route path='restauranthome' element={<RestaurantHome />} />
      </Routes>
  );
}

export default App;
