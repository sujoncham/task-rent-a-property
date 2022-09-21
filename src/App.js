import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Buy from './components/Pages/Buy';
import Home from './components/Pages/Home';
import Rent from './components/Pages/Rent';
import Sell from './components/Pages/Sell';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Rent a property</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Buy></Buy>}></Route>
        <Route path='/' element={<Sell></Sell>}></Route>
        <Route path='/' element={<Rent></Rent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
