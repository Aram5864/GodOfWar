import { useState } from "react";
import "./val.scss";
import style from "./register.module.scss";

const Reg = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [isvalid, setisvalid] = useState("");
    const [isemvalid, setisemvalid] = useState("");
    const [Password, setPassword] = useState("");
    const [ispassvalid, setispassvalid] = useState("");

    const myName = (evt) => {
        setname(evt.target.value);

        if (name.length < 3 || name.length > 10) {
            setisvalid("invalid");
        } else {
            setisvalid("valid");
        }
    };

    const myEmail = (evt) => {
        setemail(evt.target.value);
        let val = email.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (email.length < 3 || email.length > 10) {
            setisemvalid("eminvalid");
        } else {
            setisemvalid("emvalid");
        }
    };
    const myPassword = (evt) => {
        setPassword(evt.target.value);

        if (Password.length < 3 || Password.length > 10) {
            setispassvalid("passinvalid");
        } else {
            setispassvalid("passvalid");
        }
    };

    const Reg = () => {
        if (isvalid == "valid" && isemvalid == "emvalid" && ispassvalid == "passvalid") {
alert('ok')
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
                        class={`${isvalid} "d-flex align-items-center" ${style.form_field}`}
                    >
                        <span class="far fa-user"></span>
                        <input
                            onChange={myName}
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Username"
                        />
                    </div>

                    <div
                        class={`${isemvalid} " d-flex align-items-center" ${style.form_field}`}
                    >
                        <span class="far fa-user"></span>
                        <input
                            type="email"
                            name="Mail"
                            id="Mail"
                            placeholder="Email"
                            onChange={myEmail}
                        />
                    </div>

                    <div
                        class={`${ispassvalid} " d-flex align-items-center" ${style.form_field}`}
                    >
                        <span class="fas fa-key"></span>
                        <input
                            type="password"
                            name="password"
                            id="pwd"
                            placeholder="Password"
                            onChange={myPassword}
                        />
                    </div>

                    <button onClick={Reg} class={` " btn  mt-3" ${style.btn}`}>
                        Register
                    </button>
                </form>
                <div class="text-center fs-6">
                    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Reg;
