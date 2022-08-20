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
import langShop from "./pages/Json/languageshop.json";
import { useState } from "react";

function App() {
    const [lang, setlang] = useState("en");

    let tr = langShop.filter((item) => {
        return item.lang === lang;
    });

    const am = () => {
        setlang("am");
    };
    const ru = () => {
        setlang("ru");
    };
    const en = () => {
        setlang("en");
    };

    return (
        <div>
            <BrowserRouter>
                <Header translateam={am} translateen={en} translateru={ru} />
                <Routes>
                    <Route
                        path="/"
                        element={<Home JsonPersonsData={JsonPersonsData} />}
                    />
                    <Route path="/shop" element={<Shop obj={tr} />} />
                    <Route path="/ax" element={<Ax />} />
                    <Route path="/lang" element={<Lang />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
