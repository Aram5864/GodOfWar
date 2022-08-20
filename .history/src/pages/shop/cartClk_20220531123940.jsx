const CartClk = ({name}) => {


    const AddToCart = ()=>{
        alert(name)
    }


    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};




export default CartClk;