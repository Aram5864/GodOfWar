import style from "./error.scss"


function Error() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class={style.errortemplate}>
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div class={style.erroractions}>
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div class={style.erroractions}>
                                <a href="http://www.jquery2dotnet.com" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                    Take Me Home </a><a href="http://www.jquery2dotnet.com" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact Support </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Error;