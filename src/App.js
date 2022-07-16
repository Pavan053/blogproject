import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './project/Home';
import Bollywood from './project/Bollywood';
import Api from './project/Api';
import Fitness from './project/Fitness';
import Hollywood from './project/Hollywood';
import Technology from './project/Technology';
import Food from './project/Food';
import Bp from './project/Bp';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Api>
    <div className="App">
       <BrowserRouter>
        <Bp/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/bollywood" element={<Bollywood/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/hollywood" element={<Hollywood/>}/>
          <Route path="/fitness" element={<Fitness/>}/>
          <Route path="/food" element={<Food/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </Api>
    
    </>
  );
}

export default App;