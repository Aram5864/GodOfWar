import style from './Log.module.scss';

const Log=()=>{
    return(
        <div class= {style.wrapper}>
        <div class={style.logo}>
            <img src="https://img1.goodfon.com/original/3000x2000/e/70/kratos-sony-2017-voin-kratos-god-of-war-spartanets.jpg" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            Twitter
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
    )
}

export default Log;