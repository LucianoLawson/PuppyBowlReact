import './App.css';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import PlayerDetails from './components/PlayerDetails';
import { Routes, Route } from 'react-router-dom'; 

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AllPlayers />} />
                <Route path='/players/:id' element={<SinglePlayer />} />
                <Route path='/players/:id' element={<PlayerDetails />} />
            </Routes>
        </div>
    );
}

export default App;
