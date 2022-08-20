import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/layouts/Header";
import Footer from "./pages/layouts/Footer";
import JsonPersonsData from './pages/Json/persons.json';


function App() {
    let personsRight = JsonPersonsData.filter((item) => {
        return item.position === "right";
    });
 
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home personsRight = {personsRight} personsLeft = {personsLeft} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
