export default function SearchMenu (props) {
    // Компонент для меню поиска

    const {menuList} = props;

    return (
            <div className="search_menu-container">
                {menuList.map((item, i) => (
                    i == 7 ? (<a className="search_menu-link" href="" key={i}>ещё</a>) : i > 7 ? "" : <a className="search_menu-link" href="" key={i}>{item}</a>
                ))}
            </div>
    )
}