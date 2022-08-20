import { logDOM } from "@testing-library/react";

const CartClk = ({ name, price, image, id }) => {
    const [count, setcount] = useState(0)
    const AddToCart = () => {
        let cartarr = {
            id: id,
            name: name,
            price: price,
            image: image,
        };
    
        setcount(count + 1);
        console.log(count);

        let str = JSON.stringify(cartarr);
        

        localStorage.setItem("cart", str);
    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
