import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import ImageGallery from './Components/ImageGallery/ImageGallery';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="imagegallery" element={<ImageGallery />} />  
    </Routes>
    </div>
  );
}

export default App;
