import './App.css';
import{BrowserRouter as Router,Routes,Route}from'react-router-dom';
import Home from './pages/Home';
import Create from'./pages/create';
import Next from'./pages/Next';
import Password1 from './pages/Password1';
import Login1 from'./pages/Login1';
import Thank1 from'./pages/Thank1';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element ={<Create/>}/>
        <Route path="/Next" element ={<Next/>}/>
       <Route path="/password1" element={<Password1/>}/>
       <Route path="/Login1" element={<Login1/>}/>
       <Route path="/thank1" element={<Thank1/>}/>
       
      </Routes>
    </Router>
  );
}
export default App;
