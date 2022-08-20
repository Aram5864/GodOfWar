const CartClk = ({ name, price, image, id }) => {
    
    const AddToCart = () => {
        localStorage.setItem("cart", 'xxxx');
    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
