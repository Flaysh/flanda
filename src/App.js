import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="App">
      <header className="flanda">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Feed />} />
          <Route path="/settings" element={<House />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
