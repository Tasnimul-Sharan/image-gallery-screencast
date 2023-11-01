import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import ImageGallery from './Components/ImageGallery/ImageGallery';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="imagegallery" element={<ImageGallery />} />  
    </Routes>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
