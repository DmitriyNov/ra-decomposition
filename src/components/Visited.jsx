export default function Visited (props) {

    // Компонент для сервиса Посещаемое
    
    const {data} = props;
        
    return (
        <div className="visited-service">  
            {data.map((item, i) => (
                <p key={i}>
                    <span className="visited-title">{item.title + " "}</span>
                    - {item.text}
                </p>
            ))}
        </div>
    )
}