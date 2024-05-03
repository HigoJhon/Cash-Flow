import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import NewUser from './pages/newUser';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newUser" element={ <NewUser /> } />
      </Routes>
  );
}

export default App;
