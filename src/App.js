import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar/Navbar';
import PrivateRoute from './PrivateRoute';
import TodoIndividualItem from './TodoIndividualItem';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/todos' element={<PrivateRoute><Todos /></PrivateRoute>}></Route>
        <Route path='/todo/:id' element={<TodoIndividualItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
