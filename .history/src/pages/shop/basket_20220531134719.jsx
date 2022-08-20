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

        </div>
            
        </>
    );
};

export default Basket;
