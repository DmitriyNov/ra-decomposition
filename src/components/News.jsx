export default function News (props) {

    // Компонент для новости
    
    const {news} = props;
        
    return (
        <div className="news">  
            <span className="news-icon material-symbols-outlined">{news.icon}</span>
            <a className="news-link" href={news.link}>{news.text}</a>
        </div>
    )
}