const CartClk = ({name, price, image}) => {


    let cartarr = [name,price,image]
    const AddToCart = ()=>{
        localStorage.setItem('cart',)
    }


    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};




export default CartClk;