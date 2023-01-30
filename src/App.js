import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {Routes,Route} from "react-router-dom";
import Adduser from "./Component/Adduser";
import Showuser from "./Component/Showuser";
import Home from './Component/Home';
import Updateuser from './Component/Updateuser';
import NotFound from './Component/NotFound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/add' element={<Adduser/>}/>
        <Route path="/all" element={<Showuser/>}/>
        <Route path="/update/:id" element={<Updateuser/>} />
        <Route  path="/*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
