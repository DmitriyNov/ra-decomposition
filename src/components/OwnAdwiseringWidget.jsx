export default function OwnAdwiseringWidget (props) {

    // Компонент для рекламы сервисов Заказчика
    
    const {data} = props;
        
    return (
        <div className="own-adwisering">  
            <div className="own-adwisering-image-containeer">
                <img className="own-adwisering-image" src={data.image}/>
            </div>
            <a className="own-adwisering-title" href="">{data.title}</a>
            <p className="own-adwisering-text">{data.text}</p>
        </div>
    )
}