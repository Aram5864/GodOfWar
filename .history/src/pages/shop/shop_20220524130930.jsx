import style from "./Shop.module.scss";

const Shop = ({ obj }) => {
    // let str = JSON.stringify(obj);
    // localStorage.setItem('name', str);

    console.log(obj);
    return (
        <>
            {obj.map((item) => {
                return <h1>{item.description}</h1>;
            })}

             <nav class="bg-dark navbar-dark">
                <div class="container">
                    <a href="" class="navbar-brand">
                        <i class="fas fa-tree mr-2"></i> SHOP
                    </a>
                </div>
            </nav> 
             <section id="header" class={`${style.header} jumbotron text-center`}>
                <h1 class="display-3"></h1>
                <p class="lead">
                  
                </p>
              
            </section>

            <section id="gallery" class={`${style.sec}`}>
                <div class="container">
                    <div class="row">
                        <div class= "col-lg-4 mb-4">
                            <div class={`${style.card} "card"`} >
                                <img
                                    src="https://i.ytimg.com/vi/5Bvy57_EYWM/maxresdefault.jpg"
                                    alt=""
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">God of War 1</h5>
                                    <p class="card-text">
                                        5$
                                    </p>
                                    <a
                                        href=""
                                        class="btn btn-outline-success btn-sm"
                                    >
                                        Add to Ca
                                    </a>
                                    <a
                                        href=""
                                        class="btn btn-outline-danger btn-sm"
                                    >
                                        <i class="far fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
               
                    </div>
                </div> 
             </section> 
        </>
    );
};

export default Shop;
