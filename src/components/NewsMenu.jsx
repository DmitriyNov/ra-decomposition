export default function NewsMenu (props) {

    // Компонент для новостного меню + дата
    
    const {date} = props;
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "субота"];

    return (
        <>
            <div className="news-menu">
                <a className="news-menu-link news-selected" href="">Сейчас в СМИ</a>
                <a className="news-menu-link" href="">в Монголии</a>
                <a className="news-menu-link" href="">Рекомендуем</a>
                <span className="news-date">{"" + date.getDate() + " " + months[date.getMonth()] + ", " + days[date.getDay()] + " " + ((date.getHours().toString().length == 1) ? "0" + date.getHours() : date.getHours()) + ":" + ((date.getMinutes().toString().length == 1) ? "0" + date.getMinutes() : date.getMinutes())}</span>
            </div>
        </>
    )
}