import style from "./Home.module.scss";
import "../../App.scss";
import JsonPersonsData from '../Json/persons.json';


let personsRight = JsonPersonsData.filter((item)=>{
        return item.position === 'right';
})  
let personsLeft = JsonPersonsData.filter((item)=>{
    return item.position === 'left';
})  




const Home = () => {
    return (
        <div className={style.home_big}>
            <section className="dark">
                <div className="container py-4">
                    <h1 className="h1 text-center" id="pageHeaderTitle">
                        My Cards Dark
                    </h1>





                {
                    array.personsRight((item)=>{
                        return(

                        )
                    })
                }

                 










                    <article className="postcard dark red">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src="https://picsum.photos/501/500"
                                alt="Image Title"
                            />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title red">
                                <a href="#">Podcast Title</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>
                                    Mon, May 25th 2020
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi, fugiat asperiores
                                inventore beatae accusamus odit minima enim,
                                commodi quia, doloribus eius! Ducimus nemo
                                accusantium maiores velit corrupti tempora
                                reiciendis molestiae repellat vero. Eveniet
                                ipsam adipisci illo iusto quibusdam, sunt neque
                                nulla unde ipsum dolores nobis enim quidem
                                excepturi, illum quos!
                            </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fas fa-tag mr-2"></i>Podcast
                                </li>
                                <li className="tag__item">
                                    <i className="fas fa-clock mr-2"></i>55
                                    mins.
                                </li>
                                <li className="tag__item play red">
                                    <a href="#">
                                        <i className="fas fa-play mr-2"></i>Play
                                        Episode
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Home;
