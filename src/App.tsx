import { Routes, Route } from 'react-router-dom';
import StoryDetail from './app/screens/StoryDetail/StoryDetail';
import ComponentJson from './app/screens/ComponentJson/ComponentJson';

import './App.css';

function App() {
  /* istanbul ignore next */
  return (
      <Routes>
        <Route path='/' element={<StoryDetail />} />
        <Route path='componentJson' element={<ComponentJson />} />
      </Routes>
  );
}

export default App;
