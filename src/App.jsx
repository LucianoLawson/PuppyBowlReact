import './App.css';
import AllPlayers from './components/AllPlayers';
import PlayerDetails from './components/PlayerDetails';
import NewPlayerForm from './components/NewPlayerForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<PlayerDetails />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
}

export default App;
