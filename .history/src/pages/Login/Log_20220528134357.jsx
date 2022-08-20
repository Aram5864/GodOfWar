import { useState } from "react";
import style from "./Log.module.scss";

const Log = () => {
    const [emailch, setemailch] = useState("");
    const [passwordch, setpasswordch] = useState();

    const email = (evt) => {
        setemailch(evt.target.value);
    };

    const password = (evt) => {
        setpasswordch(evt.target.value);
    };

    let getDataUser = localStorage.getItem("user");
    let parseGetDataUser = JSON.parse(getDataUser);

    const Login = () => {
        if (
            parseGetDataUser[0] === emailch &&
            parseGetDataUser[1] === passwordch
        ) {
            let locData
            let strarrUsersData = JSON.parse(locData);
            sessionStorage.setItem('userData',strarrUsersData);
            window.location.href = '/Log';

            window.location.href = '/user-page'
        }else{
            alert('chok')
        }
    };

    return (
        <div class={style.bh}>
            <div class={style.wrapper}>
                <div class={style.logo}>
                    <img
                        src="https://yt3.ggpht.com/a/AATXAJwtbfi1y40viIk7WmlxYPBBpNbO1n5t43pKSRKCQw=s900-c-k-c0xffffffff-no-rj-mo"
                        alt=""
                    />
                </div>
                <div class="text-center mt-4 name"></div>
                <form class="p-3 mt-3">
                    <div
                        class={`" d-flex align-items-center" ${style.form_field}`}
                    >
                        <span class="far fa-user"></span>
                        <input
                            onChange={email}
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Username"
                        />
                    </div>
                    <div
                        class={` " d-flex align-items-center" ${style.form_field}`}
                    >
                        <span class="fas fa-key"></span>
                        <input
                            onChange={password}
                            type="password"
                            name="password"
                            id="pwd"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="button"
                        class={` " btn  mt-3" ${style.btn}`}
                        onClick={Login}
                    >
                        Login
                    </button>
                </form>
                <div class="text-center fs-6">
                    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Log;
