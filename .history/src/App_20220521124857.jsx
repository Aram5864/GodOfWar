import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/layouts/Header";
import Footer from "./pages/layouts/Footer";
import JsonPersonsData from "./pages/Json/persons.json";
import Shop from "./pages/shop/shop";
import Ax from "./pages/axios/axios";
import Lang from "./pages/lang/language";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home JsonPersonsData={JsonPersonsData} />}
                    />
                    <Route
                        path="/shop"
                        element={<Shop />}
                    />
                     <Route
                        path="/ax"
                        element={<Ax />}
                    />
                     <Route
                        path="/lang"
                        element={<Lang />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
