import SearchMenu from "./SearchMenu";
import SearchBar from "./SearchBar"

export default function SearchWidget (props) {

    // Общий компонент для поиска
    
    const {search} = props;
        
    return (
        <div className="search-container">  
            <div className="search-logo-container">
                <img className="search-logo" src="../src/assets/img/logo.png"/>
            </div>
            <div>
                <SearchMenu menuList={search.menu}/>
                <SearchBar />
                <div>
                    <p>Найдётся всё. Например, <a className="search-example" href="">{search.example}</a></p>
                </div>
            </div>
        </div>
    )
}
