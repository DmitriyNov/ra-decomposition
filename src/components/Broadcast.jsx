export default function Broadcast (props) {

    // Компонент для сервиса Эфир
    
    const {data} = props;
        
    return (
        <div className="broadcast-service">  
            {data.map((item, i) => (
                <div key={i} className="broadcast-text">
                    <span className="material-symbols-outlined broadcast-icon">play_circle</span>
                    <span>{item.name}</span>
                    <span className="broadcast-channel">{item.channel}</span>
                </div>
            ))}
        </div>
    )
}