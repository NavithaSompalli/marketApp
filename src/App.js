import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Booking from './components/Booking';
import OrderComplete from './components/OrderComplete'

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        
        <Routes>
          <Route
            path="*"
            element={<Header />}
          />
        </Routes>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/order" element={<OrderComplete/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
