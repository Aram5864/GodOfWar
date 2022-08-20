import style from "./lang.module.scss";

const Lang = () => {
    let lang = [
        {
            description: "This is a complete list of all armor sets that appear in God of War (2018)",
            lang: "en",
        },
        {
            description: "Это полный список всех наборов доспехов, которые появляются в God of War (2018).",
            lang: "ru",
        },
        {
            description: "Սա բոլոր զրահատեխնիկայի ամբողջական ցանկն է, որոնք հայտնվում են God of War-ում (2018)",
            lang: "am",
        },
    ];

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
