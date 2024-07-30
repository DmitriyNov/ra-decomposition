export default function TVProgramm (props) {

    // Компонент для сервиса Телепрограмма
    
    const {data} = props;
        
    return (
        <div className="TVProgramm-service">  
            {data.map((item, i) => (
                <p key={i}>
                    {item.time + " " + item.name + " "}
                    <span className="TVProgramm-channel">{item.channel}</span>
                </p>
            )) }
        </div>
    )
}