import MyComics from "./MyComics";

const MyCards = () => {
    return (
        <>
        <section className="sfondoNero">
            <div className="principalContainer flex wrap">
                <div className="labels">
                    <MyComics/>
                    <a href=""><button>LOAD MORE</button></a>
                </div>
            </div>
        </section>
        </>
    );
};

export default MyCards;