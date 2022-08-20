import { Link } from "react-router-dom";
import style from "./header.module.scss";

const Header = ({ translateam, translateen, translateru }) => {


    let set = sessionStorage.getItem("userData");


    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.header}`}
        >
            <div className="container">
                <Link className="navbar-brand" to="/">
                    God Of War
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ax">
                                Axios
                            </Link>
                        </li>

                  

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li className="">
                                    <Link className="dropdown-item" to="/lang">
                                        Lang
                                    </Link>
                                </li>

                                
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>

                    
                    <form className="d-flex">
                        <input
                            className={`${style.navbar_inp} form-control me-2 `}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className={`${style.navbar_inp} btn btn-outline-info`}
                            type="submit"
                        >
                            Search
                        </button>


                        <img
                            onClick={translateam}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Armenia_%283-2%29.svg/200px-Flag_of_Armenia_%283-2%29.svg.png"
                            alt=""
                            width={30}
                            height={20}
                            style={{marginLeft:"10px",marginTop:"10px",cursor:"pointer"}}
                        />
                        <img
                            onClick={translateen}
                            src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                            alt=""
                            width={30}
                            height={20}
                            style={{marginLeft:"10px",marginTop:"10px",cursor:"pointer"}}

                        />
                        <img
                            onClick={translateru}
                            src="https://flagpedia.net/data/flags/w1600/ru.png"
                            alt=""
                            width={30}
                            height={20}
                            style={{marginLeft:"10px",marginTop:"10px",cursor:"pointer"}}

                        />
                         
                        
                    </form>

{
    set ? <>   <div className={style.logreg}>
    <li className="nav-item">
            <Link className="nav-link" to="/Reg">
               <button  className="btn btn-outline-warning">Registartion</button>
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/Log">
            <button className="btn btn-outline-info">Login</button>
            </Link>
        </li>
    </div> </> : <></>
}
                  
                </div>
            </div>
        </nav>
    );
};

export default Header;
