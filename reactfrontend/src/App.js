import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route 
} from 'react-router-dom' //Import browser router, routes and route from react-router-dom library for routing
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
    <> 
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/createEvent' element={<CreateEvent />}></Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
