




const Basket = ()=>{
    let getItemsCart = localStorage.getItem('cart');
    let parseItemsCart = JSON.parse(getItemsCart);
    console.log(parseItemsCart);
    return(
        <>
            <h1>Welcome to Basket</h1>
        </>
    )
}



export default Basket;