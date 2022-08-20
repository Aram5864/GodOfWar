import CartClk from "./cartClk";
import style from "./Shop.module.scss";

const Shop = ({ obj,textjson }) => {

    return (
        <>
            <nav class="bg-dark navbar-dark">
                <div class="container">
                    <a href="" class="navbar-brand">
                        <i class="fas fa-tree mr-2"></i>
                        
                        
                      {textjson[0].shop}
                    </a>
                    <p className="text-white">
                    {textjson[1].text}
                    </p>
                </div>
            </nav>
            <section
                id="header"
                class={`${style.header} jumbotron text-center`}
            >
                <h1 class="display-3"></h1>
                <p class="lead"></p>
            </section>

            <section id="gallery" class={`${style.sec}`}>
                <div class="container">
                    <div class="row justify-content-evenly">
                        {obj.map((item) => {
                            return (
                                <div key={item.id} class="col-lg-4 mb-4">
                                    <div class={`${style.card} "card"`}>
                                        <img
                                            src={item.image}
                                            alt=""
                                            class="card-img-top"
                                            height={400}
                                        />
                                        <div class="card-body">
                                            <h5 class= {` "card-title color-info" ${style.h5}`}  >
                                                {item.name}
                                            </h5>
                                            <p class= {`"card-text" ${style.pp}`}>{item.price}</p>
                                           
                                           

                                        <CartClk name = {} />

                                          


                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
