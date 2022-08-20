import style from './Log.module.scss';

const Log=()=>{
    return(
        <section class={`"vh-100 bg-image" ${style.bh}`}
        >
        <div class= {style.wrapper}>
        <div class={style.logo}>
            <img src="https://yt3.ggpht.com/a/AATXAJwtbfi1y40viIk7WmlxYPBBpNbO1n5t43pKSRKCQw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
        </div>
        <div class="text-center mt-4 name">
           
        </div>
        <form class="p-3 mt-3">
            <div class={`"form-field d-flex align-items-center" ${style.form_field}`}>
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div class={` " d-flex align-items-center" ${style.form_field}` }>
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button class= {` " btn  mt-3" ${style.btn}`} >Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>
    </section>
    )
}

export default Log;