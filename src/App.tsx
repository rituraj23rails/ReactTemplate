import { Routes, Route } from 'react-router-dom';
import CountryHome from './app/screens/CountryHome/CountryHome';
import CountryList from './app/screens/CountryList/CountryList';
import CountryDetails from './app/screens/CountryDetails/CountryDetails';
import WareHouse from './app/screens/CountryList/WareHouse';
import './App.css';

function App() {
  /* istanbul ignore next */
  return (
      <Routes>
        <Route path='/' element={<WareHouse />} />
        <Route path='countrylist' element={<CountryList />} />
        <Route path='countrydetails' element={<CountryDetails />} />
      </Routes>
  );
}

export default App;
