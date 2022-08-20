const Basket = () => {
    let getItemsCart = localStorage.getItem("cart");
    let parseItemsCart = JSON.parse(getItemsCart);

    console.log(parseItemsCart);
    return (
        <>
            {parseItemsCart.map((item) => {
                return (
                    <div key={item.id + 'basket'} class="card" style={{width: "18rem"}}>
                        <img src={item.i} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" class="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Basket;
