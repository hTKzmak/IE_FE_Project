import { useState, useEffect } from "react"
import style from "./CategoriesList.module.css"
import Category from "./components/Category"
import { Link } from "react-router-dom"


function CategoriesList() {

    const BASE_URL = 'http://localhost:3333'

    const [categoires, setCategories] = useState([])

    // GET запрос
    useEffect(() => {
        fetch(BASE_URL + '/categories/all')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className={style.smth}>
            <h1>Categories</h1>
            <div className={style.categories}>
                {categoires.map(elem =>
                    <Link to={`/category/${elem.id}`}>
                        <Category
                            id={elem.id}
                            img={BASE_URL + elem.image}
                            title={elem.title}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
}
export default CategoriesList