export default function SearchBar () {

    // Компонент для поисковой строки

    return (
        <div className="search_bar-container">
            <div className="search_bar">
                <input className="search_bar-input"/>
                <div className="search_bar-icon">
                    <span className="material-symbols-outlined">
                        keyboard
                    </span>
                </div>
            </div>
            <div className="search_bar-button">
                <p>Найти</p>
                <div className="search_bar-arrow top"></div>
                <div className="search_bar-arrow bottom"></div>
            </div>
        </div>
    )
}
