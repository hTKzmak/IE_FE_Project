import { useState, useEffect } from "react"
import style from "./CategoriesList.module.css"
import Category from "./components/Category"


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
                    <Category
                        id={elem.id}
                        img={BASE_URL + elem.image}
                        title={elem.title}
                    />
                )}
            </div>
        </div>
    );
}
export default CategoriesList