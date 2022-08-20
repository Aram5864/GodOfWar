import Change from "./change";
import style from "./Shop.module.scss";

const Basket = () => {
    let x = [];
    for (let i = 0; i < 20; i++) {
        let getItemsCart = localStorage.getItem("cart" + i);
        x.push(getItemsCart);
    }

    let c = x.filter((item) => {
        return item !== null;
    });

    // if (x) {
    //         xx = x;
    //     }

    // let parseItemsCart = JSON.parse(getItemsCart);

    // console.log(parseItemsCart);
    return (
        <>
            <div className={style.big_box_basket}>
                {c.map((item) => {
                    let s = JSON.parse(item);

                    return (
                        <div
                            key={s.id + "basket"}
                            className="card"
                            style={{ width: "18rem" }}
                        >
                            <img
                                src={s.image}
                                className={`card-img-top ${style.images}`}
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{s.name}</h5>
                                <p className="card-text">{s.price}</p>

                                <Change />
                            </div>
                        </div>
                    );
                })}

                <div className={style.boxChange}>
                        
                </div>
            </div>
        </>
    );
};

export default Basket;
