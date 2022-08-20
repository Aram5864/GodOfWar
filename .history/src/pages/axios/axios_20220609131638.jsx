import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.scss";
{
    /* {data.map((item) => {
                return <h1>{item.name}</h1>;
            })} */
}

{
    /* events */
}

{
    // const asd = (evt) => {
    //     if (evt.keyCode === 13) {
    //         console.log(evt.keyCode);
    //     }
    // };
}

{
    /* onMouseEnter */
    /* onClick */
    /* onChange onKeyDown */
    /* onKeyUp */
    /* onCopy */
    /* onMouseOut */
}

function Ax() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios
            .get(`https://mocki.io/v1/e62b7cd4-587f-45ed-9c05-3ae5ec5785e2`)
            .then((res) => {
                setdata(res.data);
            });
    }, []);

    // const asd = (evt) => {
    //     console.log(evt.target.value);
    // };

    // const asd = (evt) => {
    //     if (evt.target.scrollTop === 0) {
    //         console.log('top');
    //     }else if (evt.target.scrollTop >= 200) {
    //         console.log('bottom');

    //     }
    //     console.log(evt.target.scrollTop);
    // };
    return (
        <>
            <p  className="asdasdasd">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates culpa nam eveniet tempore fuga maiores nulla
                voluptate porro quis officia. Illum sed aspernatur voluptatem
                quasi aliquid dignissimos unde error atque. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Minus odio alias
                consectetur amet vel magni dolor fuga numquam qui doloremque
                nostrum corporis eum, mollitia iusto saepe eos quibusdam
                quisquam nisi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Molestias deserunt aliquam ex magnam quasi,
                alias maiores architecto quibusdam rerum perspiciatis non in
                dolores consequuntur ratione facere incidunt dolorem, provident
                distinctio. Illo deleniti qui inventore beatae sint, a corporis
                doloribus similique voluptas. Blanditiis unde possimus optio
                commodi, animi illo, quae iste officiis expedita porro assumenda
                ipsam, nulla atque sit sint inventore? Omnis soluta a asperiores
                debitis saepe quae voluptate eveniet iste odit consequuntur
                voluptates dolorum, at autem vero consequatur excepturi optio,
                esse dicta repudiandae labore in consectetur possimus. Aliquid,
                vitae aliquam! Sapiente quos debitis quam enim, asperiores sed
                amet, a fugiat quo voluptatem eligendi quia inventore aliquam!
                Dolorem cupiditate tempore ex illo molestias, corporis, dicta
                deleniti sit reiciendis repellat iure optio. Voluptate,
                asperiores? Architecto nihil rem mollitia error maxime
                repudiandae expedita nulla illo, doloribus consequuntur, animi
                alias, tenetur unde? Expedita odio aperiam quia eligendi alias
                eos? Vero sit molestiae aliquam esse. Dolorum excepturi natus
                rem qui doloribus explicabo perferendis, ipsum minus. Laudantium
                nisi quod quibusdam porro facilis, quis mollitia ipsam iure
                officia voluptatibus, sint reiciendis neque impedit accusamus
                voluptate, eveniet nam. Culpa saepe debitis cupiditate. Saepe
                rem, laborum illo amet voluptate voluptas blanditiis pariatur
                dolores, nihil cumque vero quasi molestias, delectus odio minima
                ab placeat magnam molestiae dicta beatae. Odit, commodi.
                Incidunt vero, ea, at laboriosam saepe repellat, nesciunt
                repellendus doloremque ipsa placeat iste itaque cupiditate
                consequatur. Aperiam impedit officiis nobis excepturi quos,
                reprehenderit, facilis dolorem quidem praesentium ad itaque eum.
                Ad rerum totam nemo repellat, nostrum ducimus nam dolorem magni
                cum obcaecati dicta vitae aperiam molestiae beatae ea eum, omnis
                deleniti dolor impedit veniam ipsam iure suscipit! Delectus,
                reiciendis incidunt! Repudiandae necessitatibus minima
                distinctio, molestias quod ullam nemo veritatis facilis! Quas
                quaerat dolorum illum asperiores exercitationem sit ipsam, ullam
                fuga alias sunt repellat non? Eius, maxime! Omnis ex facilis
                ullam.
            </p>

            <button>Event</button>
        </>
    );
}

export default Ax;
