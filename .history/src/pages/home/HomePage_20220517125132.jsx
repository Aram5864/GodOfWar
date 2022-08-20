import style from "./Home.module.scss";
import "../../App.scss";
import { useState } from "react";
import Clk from "./Clk";

const Home = ({JsonPersonsData}) => {
  
    const [count1, setcount1] = useState(0)




    return (
        <div className={style.home_big}>
            <section className="dark">
                <div className="container py-4">
                    <h1 className="h1 text-center" id="pageHeaderTitle">
                        ПЕРСОНАЖИ
                    </h1>

                    {JsonPersonsData.map((item) => {
                        // console.log(item.description.substring(0,10));
                        return (
                            <article className="postcard dark blue">
                                <a className="postcard__img_link" href="#">
                                    <img
                                        className="postcard__img"
                                        src={item.image}
                                        alt="Image Title"
                                    />
                                </a>
                                <div className="postcard__text">
                                    <h1 className="postcard__title blue">
                                        <a href="#">{item.name}</a>
                                    </h1>
                                    <div className="postcard__subtitle small">
                                        <time datetime="2020-05-25 12:00:00">
                                            <i className="fas fa-calendar-alt mr-2"></i>
                                            Mon, May 25th 2020
                                        </time>
                                    </div>
                                    <div className="postcard__bar"></div>
                                    <div className="postcard__preview-txt">
                                        {item.description}
                                    </div>
                                    <ul className="postcard__tagbox">


                                       


                                        <Clk count1 = {count1} />



                                        <li className="tag__item">
                                            <i className="fas fa-clock mr-2"></i>
                                            55 mins.
                                        </li>
                                        <li className="tag__item play blue">
                                            <a href="#">
                                                <i className="fas fa-play mr-2"></i>
                                                Play Episode
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        );
                    })}

                  
                </div>
            </section>
        </div>
    );
};
export default Home;
