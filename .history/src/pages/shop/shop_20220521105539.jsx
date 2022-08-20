import style from './Shop.module.scss';


const Shop = () => {
    return (
        <>
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

            <section id="gallery">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img
                                    src="https://i.ytimg.com/vi/5Bvy57_EYWM/maxresdefault.jpg"
                                    alt=""
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">God of War 1</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Ut eum similique
                                        repellat a laborum, rerum voluptates
                                        ipsam eos quo tempore iusto dolore modi
                                        dolorum in pariatur. Incidunt
                                        repellendus praesentium quae!
                                    </p>
                                    <a
                                        href=""
                                        class="btn btn-outline-success btn-sm"
                                    >
                                        Read More
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
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img
                                    src="https://i.playground.ru/p/_swYVEPn8iQ8WG49jkj8AQ.jpeg"
                                    alt=""
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">God of war 2</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Ut eum similique
                                        repellat a laborum, rerum voluptates
                                        ipsam eos quo tempore iusto dolore modi
                                        dolorum in pariatur. Incidunt
                                        repellendus praesentium quae!
                                    </p>
                                    <a
                                        href=""
                                        class="btn btn-outline-success btn-sm"
                                    >
                                        Read More
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
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img
                                    src="https://i.playground.ru/p/_5VXQYrL_NvtDM8sDXFKVg.jpeg"
                                    alt=""
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">God of war 3</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Ut eum similique
                                        repellat a laborum, rerum voluptates
                                        ipsam eos quo tempore iusto dolore modi
                                        dolorum in pariatur. Incidunt
                                        repellendus praesentium quae!
                                    </p>
                                    <a
                                        href=""
                                        class="btn btn-outline-success btn-sm"
                                    >
                                        Read More
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
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img
                                    src="https://i.playground.ru/p/PrKosKs-8SxoP-laRExhaQ.jpeg"
                                    alt=""
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">God of war 4</h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Ut eum similique
                                        repellat a laborum, rerum voluptates
                                        ipsam eos quo tempore iusto dolore modi
                                        dolorum in pariatur. Incidunt
                                        repellendus praesentium quae!
                                    </p>
                                    <a
                                        href=""
                                        class="btn btn-outline-success btn-sm"
                                    >
                                        Read More
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
