const CartClk = ({ name, price, image, id }) => {
    const AddToCart = () => {
        let cartarr = {
            id: id,
            name: name,
            price: price,
            image: image,
        };
     

       

        console.log(arrCount);

        let str = JSON.stringify(arrCount);

        const zoo = ['z'];
        const birds = ['b', 'b', 'b','b'];
        zoo.push(...birds);
        
        console.log(zoo); 

        localStorage.setItem("cart", str);
    };

    return (
        <button onClick={AddToCart} href="" class="btn btn-outline-info btn-sm">
            Add to cart
        </button>
    );
};

export default CartClk;
