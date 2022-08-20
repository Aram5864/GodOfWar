import 

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
            <div className="big_box_basket">
                {c.map((item) => {
                    let s = JSON.parse(item);

                    return (
                        <div
                            key={s.id + "basket"}
                            class="card"
                            style={{ width: "18rem" }}
                        >
                            <img src={s.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{s.name}</h5>
                                <p class="card-text">{s.price}</p>
                                <a href="#" class="btn btn-success">
                                    change
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Basket;
