import style from "./error.scss"


function Error() {
    return (
        <>bsod 
            <main class={`${style.bsod} ${style.container}`}>
                <h1 class="neg title"><span class="bg">Error - 404</span></h1>
                <p>An error has occured, to continue:</p>
                <p>* Return to our homepage.<br />
                    * Send us an e-mail about this error and try later.</p>
                <nav class="nav">
                    <a href="#" class="link">index</a>&nbsp;|&nbsp;<a href="#" class="link">webmaster</a>
                </nav>
            </main>
        </>
    )


}

export default Error;