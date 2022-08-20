import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
          <BrowserRouter>

          <Routes>
            <Route path="/" element={<App />} /> <Home />


          </Routes>

          
          </BrowserRouter>
        </div>
    );
}

export default App;
