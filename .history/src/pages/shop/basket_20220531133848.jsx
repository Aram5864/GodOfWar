const Basket = () => {

    let x = [];
    for (let i = 0; i < 20; i++) {
        let getItemsCart = localStorage.getItem("cart" + i);
        x.push(getItemsCart);
    }
   console.log(x);

    // let parseItemsCart = JSON.parse(getItemsCart);

    // console.log(parseItemsCart);
    return (
        <>
            {[].map((item) => {
         
                return (
                    <div
                        key={item.id + "basket"}
                        class="card"
                        style={{ width: "18rem" }}
                    >
                        <img src={item.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.price}</p>
                            <a href="#" class="btn btn-success">
                                change
                            </a>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Basket;
