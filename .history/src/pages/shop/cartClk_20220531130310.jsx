const CartClk = ({ name, price, image, id }) => {
    let cartarr = 
        {
            id: id,
            name: name,
            price: price,
            image: image,
        };
    let str = JSON.stringify(cartarr);
    let arrCount = [];
    let xxxx =    arrCount.push(cartarr);

    const AddToCart = () => {
        localStorage.setItem("cart", xxxx);
    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
