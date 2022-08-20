import style from "./UserPage.module.scss";

const UserPage = () => {
    return (
        <>
        <section className={style.section} id="about">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class={`${style.abouttext} go-to`}>
                            <h3 class={`${style.darkcolor} ${style.abouttexth3}`}>About Me</h3>
                            <h6 class={`${style.themecolor} lead ${style.abouttexth6}`}>A Lead UX &amp; UI designer based in Canada</h6>
                            <p className={`${style.abouttext}`}>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            <div class= {`row ${style.aboutlist}`}>
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Birthday</label>
                                        <p>4th april 1998</p>
                                    </div>
                                    <div class="media">
                                        <label>Age</label>
                                        <p>22 Yr</p>
                                    </div>
                                    <div class="media">
                                        <label>Residence</label>
                                        <p>Canada</p>
                                    </div>
                                    <div class="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div class="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>
                                    <div class="media">
                                        <label>Skype</label>
                                        <p>skype.0404</p>
                                    </div>
                                    <div class="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class={style.aboutavatar}>
                            <img src="http://simpleicon.com/wp-content/uploads/user1.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div class={style.counter}>
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class={`${style.countdata} ${style.textcenter}`}>
                                <h6 class={style.count} data-to="500" data-speed="500">500</h6>
                                <p class="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class={`${style.countdata} ${style.textcenter}`}>
                                <h6 class={style.count} data-to="150" data-speed="150">150</h6>
                                <p class="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class={`${style.countdata} ${style.textcenter}`}>
                                <h6 class={style.count} data-to="850" data-speed="850">850</h6>
                                <p class="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class={`${style.countdata} ${style.textcenter}`}>
                                <h6 class={style.count} data-to="190" data-speed="190">190</h6>
                                <p class="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default UserPage;