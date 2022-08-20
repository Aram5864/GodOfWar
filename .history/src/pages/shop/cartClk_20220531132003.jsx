const CartClk = ({ name, price, image, id }) => {
    const AddToCart = () => {
        let cartarr = {
            id: id,
            name: name,
            price: price,
            image: image,
        };

       

   

        let arrCount = [];
        arrCount.push(cartarr);

        let arrCounts  =  [...arrCount,cartarr]
        console.log(arrCounts);

        let str = JSON.stringify(arrCount);

        localStorage.setItem("cart", str);
    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
