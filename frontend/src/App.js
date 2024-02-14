import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import WorldHistory from './components/WorldHistory'
import Geography from './components/Geography'
import ComputerScience from './components/ComputerScience'
import Football from './components/Football'
import Contribute from './components/Contribute';
import Success from './components/Success';
import ActualBlog from './components/ActualBlog';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signin from './components/Signin';

function App() {
  return (
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/history' element={<WorldHistory />}></Route>
        <Route path='/geography' element={<Geography />}></Route>
        <Route path='/compsci' element={<ComputerScience/>}></Route>
        <Route path='/football' element={<Football/>}></Route>
        <Route path='/contribute' element={<Contribute />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/blog' element={<ActualBlog />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
      </BrowserRouter>
   

  );
}

export default App;
