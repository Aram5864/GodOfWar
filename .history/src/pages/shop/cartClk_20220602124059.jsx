import { useState } from "react";
import Swal from "sweetalert2";

const CartClk = ({ name, price, image, id }) => {
    const [count, setcount] = useState(id)
    const AddToCart = () => {
        let cartarr = {
            id: id,
            name: name,
            price: price,
            image: image,
        };
        
        
        if (count == 1) {
            setcount(id)
        }
        

        let str = JSON.stringify(cartarr);
        

       localStorage.setItem("cart" + count, str);

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Successfuly Added In Basket',
            showConfirmButton: false,
            timer: 1500
          })
      

    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
