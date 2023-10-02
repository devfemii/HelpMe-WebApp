import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Video />} />
        <Route path='/vid' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
