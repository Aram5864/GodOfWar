import style from "./lang.module.scss";

const Lang = () => {
    return (
        <>
            <div className={style.bigBox}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/watch?v=Ut7FkcpYL74&ab_channel=GameSpot"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </>
    );
};

export default Lang;
