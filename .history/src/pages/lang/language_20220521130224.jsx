import style from "./lang.module.scss";

const Lang = () => {

    let lang = {
        description:'',
        lang:'en'
    }


    return (
        <>
            <div className={style.bigBox}>
                <div className={style.player_box}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Ut7FkcpYL74"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>







                </div>
            </div>
        </>
    );
};

export default Lang;
