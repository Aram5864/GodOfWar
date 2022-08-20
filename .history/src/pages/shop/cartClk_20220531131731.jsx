const CartClk = ({ name, price, image, id }) => {
    const AddToCart = () => {
        // let cartarr = {
        //     id: id,
        //     name: name,
        //     price: price,
        //     image: image,
        // };

        const original = ["A"];
        let newArray;

        newArray = original.concat("B");
        newArray = [...original, "C"];

        // Result
       log

        // let arrCount = [];
        // arrCount.push(cartarr);

        // console.log(arrCount);

        // let str = JSON.stringify(arrCount);

        // localStorage.setItem("cart", str);
    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
