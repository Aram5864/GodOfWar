import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/layouts/Header";
import Footer from "./pages/layouts/Footer";
import JsonPersonsData from './pages/Json/persons.json';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home JsonPersonsData = {JsonPersonsData}/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
