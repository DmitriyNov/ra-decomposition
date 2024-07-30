export default function Rate (props) {

    // Компонент для курса отдельной валюты
    
    const {rate} = props;
        
    return (
        <div className="rate">  
            <span className="rate-currency">
                {rate.currency}
            </span>
            <span>
                {rate.rate}
            </span>
            <span className="rate-change">
                {rate.change}
            </span>
        </div>
    )
}