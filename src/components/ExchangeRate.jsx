import Rate from "./Rate"

export default function ExchangeRate (props) {

    // Общий компонент для курса валют
    
    const {rateList} = props;
   
    return (
        <>
            <div className="news-rate">
                {rateList.map((item, i) => (
                    <Rate key={i} rate={item}/>
                ))}
                <span className="material-symbols-outlined rate-more">
                    more_horiz
                </span>
            </div>
        </>
    )
}