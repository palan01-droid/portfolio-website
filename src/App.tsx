import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Browse from './pages/Browse';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="*" element={<Browse />} />
    </Routes>
  );
}

export default App;
