import style from "./error.scss"


function Error() {
    return (
        <>
            <div class={style.noise}></div>
            <div class={style.overlay}></div>
            <div class={style.terminal}>
                <h1>Error <span class={style.errorcode}>404</span></h1>
                <p class={style.output}>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <p class={style.output}>Please try to <a href="#1">go back</a> or <a href="#2">return to the homepage</a>.</p>
                <p class={style.output}>Good luck.</p>
            </div>
        </>
    )


}

export default Error;