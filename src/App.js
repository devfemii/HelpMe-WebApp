import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/vid' element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
