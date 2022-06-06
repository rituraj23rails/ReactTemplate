import { Routes, Route } from 'react-router-dom';
import ParkingHome from './app/screens/ParkingHome/ParkingHome';
import ParkingSlots from './app/screens/ParkingSlots/ParkingSlots';
import ParkingCharges from './app/screens/ParkingCharges/ParkingCharges';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<ParkingHome />} />
        <Route path='parkingSlots' element={<ParkingSlots />} />
        <Route path='parkingCharges' element={<ParkingCharges />} />
      </Routes>
  );
}

export default App;
