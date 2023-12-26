import { useState, useEffect } from "react"
import style from "./CategoriesList.module.css"
import Category from "./components/Category"
import { Link } from "react-router-dom"
import NavigationBtn from "../UI/NavigationBtn"


function CategoriesList() {

    const BASE_URL = 'http://localhost:3333'

    const [categoires, setCategories] = useState([])

    if (window.location.href == 'http://localhost:3000/') {
        categoires.splice(4, 1)
    }

    // GET запрос
    useEffect(() => {
        fetch(BASE_URL + '/categories/all')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className={style.main}>
            <div className="textAndBtn">
                <h1>Categories</h1>
                <NavigationBtn displaytype={window.location.href == 'http://localhost:3000/categoires' ? 'none' : ''} title={'All categories'} href={'/categoires'} />
            </div>
            <div className={style.categories}>
                {categoires.map(elem =>
                    <div key={elem.id}>
                        <Link to={`/category/${elem.id}`}>
                            <Category
                                id={elem.id}
                                img={BASE_URL + elem.image}
                                title={elem.title}
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
export default CategoriesList