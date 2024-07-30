export default function SomeoneAdwiseringWidget (props) {

    // Компонент для сторонней рекламы

    const {data} = props;

    return (
        <div className="someone-adwisering-container">
            <img className="someone-adwisering-image" src={data.image} alt={data.text}/>
        </div>
    )
}