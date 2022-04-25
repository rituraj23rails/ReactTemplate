import { Routes, Route } from 'react-router-dom';
import CountryHome from './app/screens/CountryHome/CountryHome';
import CountryList from './app/screens/CountryList/CountryList';
import CountryDetails from './app/screens/CountryDetails/CountryDetails';
import './App.css';

function App() {
  /* istanbul ignore next */
  return (
      <Routes>
        <Route path='/' element={<CountryHome />} />
        <Route path='countrylist' element={<CountryList />} />
        <Route path='countrydetails' element={<CountryDetails />} />
      </Routes>
  );
}

export default App;
