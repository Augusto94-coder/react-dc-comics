import MyComics from "./MyComics";

const MyCards = () => {
    return (
        
            <div className="principalContainer">               
                <div className="cardsWrapper">
                    <MyComics />
                </div>
                <div className="loadMoreContainer">
                    <button className="loadMoreBtn">LOAD MORE</button>
                </div>
            </div>
    );
};

export default MyCards;