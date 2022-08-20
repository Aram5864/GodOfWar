const CartClk = ({name, price, image}) => {


    let cartarr = [name,price,image];
    let str = JSON.stringify(car)
    const AddToCart = ()=>{
        localStorage.setItem('cart',cartarr)
    }


    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};




export default CartClk;