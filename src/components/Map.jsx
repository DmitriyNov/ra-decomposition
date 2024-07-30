export default function Map (props) {

    // Компонент для сервися Карты
    
    const {data} = props;
        
    return (
        <div className="map-service">  
            <p>{data.text}</p>
        </div>
    )
}