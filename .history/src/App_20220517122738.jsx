import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/layouts/Header";
import Footer from "./pages/layouts/Footer";


function App() {
    let x = 10;
    let y = 20;
    let res = 10 / 2 *5 + x - y ;
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home text = 'sdf' />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
