import NewsMenu from "./NewsMenu";
import News from "./News";
import ExchangeRate from "./ExchangeRate";

export default function NewsWidget (props) {

    // Общий компонент для новостного блока + курс валют
    
    const {news} = props;
        
    return (
        <div className="news-widget">
            <NewsMenu date={news.date}/>
            <div className="news-container"> 
                {news.newsList.map((item, i) => (
                    <News key={i} news={item}/>
                ))}
            </div>
            <ExchangeRate rateList={news.rateList}/>
        </div>
    )
}