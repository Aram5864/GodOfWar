const CartClk = ({ name, price, image, id }) => {
    
    const AddToCart = () => {


        let cartarr = 
        {
            id: id,
            name: name,
            price: price,
            image: image,
        };
    let arrCount = [];
      arrCount.push(cartarr);
      let str = JSON.stringify(arrCount);

    console.log(arrCount);


        localStorage.setItem("cart", arrCount);
    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
