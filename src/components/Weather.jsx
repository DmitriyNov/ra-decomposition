export default function Weather (props) {

    // Компонент для сервиса Погода
    
    const {data} = props;
        
    return (
        <div className="weather-service">  
            <div className="weather-current">
                <span className="material-symbols-outlined weather-icon">
                    {data.icon}
                </span>
                <span>{data.current + "°"}</span>
            </div>
            <div className="weather-today">
                <p>
                    Днём 
                    <span>{" " + data.day + ","}</span>
                </p>
                <p>
                    Ночью 
                    <span>{" " + data.night}</span>
                </p>
            </div>
        </div>
    )
}