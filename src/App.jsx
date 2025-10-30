import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import GameDetails from './components/GameDetails.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamedetails/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
