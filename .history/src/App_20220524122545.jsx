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
    const [first, setfirst] = useState([]);

    let tra = langShop.filter((item) => {
        return item.lang === lang;
    });

    console.log(tra);

    const am = () => {
        setlang("am");
    };

    const en = () => {
        setlang("en");
    };
    const ru = () => {
        setlang("en");

    };


    return (
        <div>
            <BrowserRouter>
                <Header translateam={am} translateen={en}  translateru={ru}/>
                <Routes>
                    <Route
                        path="/"
                        element={<Home JsonPersonsData={JsonPersonsData} />}
                    />
                    <Route path="/shop" element={<Shop obj={tra} />} />
                    <Route path="/ax" element={<Ax />} />
                    <Route path="/lang" element={<Lang />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
