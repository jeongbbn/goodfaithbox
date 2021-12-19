import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Products from './pages/Products';
import Interest from './pages/Interest';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
    </div>
  );
}

export default App;
