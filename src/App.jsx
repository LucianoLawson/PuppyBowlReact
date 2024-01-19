import './App.css';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import { Routes, Route } from 'react-router-dom'; 

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AllPlayers />} />
                <Route path='/players/:id' element={<SinglePlayer />} />
            </Routes>
        </div>
    );
}

export default App;
