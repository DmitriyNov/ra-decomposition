import Weather from "./Weather"
import Visited from "./Visited"
import Map from "./Map"
import TVProgramm from "./TVProgramm"
import Broadcast from "./Broadcast"

export default function Service (props) {

    // Шаблонный компонент для сервисов
    
    const {data} = props;
   
    return (
        <>
            <div className="service">
                <p className="service-title">{data.title}</p>
                {data.component == "Weather" && <Weather data={data.data}/>}
                {data.component == "Visited" && <Visited data={data.data}/>}
                {data.component == "Map" && <Map data={data.data}/>}
                {data.component == "TVProgramm" && <TVProgramm data={data.data}/>}    
                {data.component == "Broadcast" && <Broadcast data={data.data}/>}
            </div>
        </>
    )
}