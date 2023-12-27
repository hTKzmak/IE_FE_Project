import { useState, useEffect } from "react"
import style from "./CategoriesList.module.css"
import Category from "./components/Category"
import { Link } from "react-router-dom"
import NavigationBtn from "../UI/NavigationBtn"


function CategoriesList({ categoriesInHomePage }) {

    const BASE_URL = 'http://localhost:3333'

    const [categoires, setCategories] = useState([])

    if (categoriesInHomePage === true) {
        categoires.splice(4, 1)
    }

    // GET запрос
    useEffect(() => {
        fetch(BASE_URL + '/categories/all')
            .then(res => res.json())
            .then(data => setCategories(data))
            document.body.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div className={style.main}>
            <div className="textAndBtn">
                <h1>Categories</h1>
                <div style={{display: categoriesInHomePage === true ? '' : 'none'}} className="line"></div>
                <NavigationBtn displaytype={categoriesInHomePage === true ? '' : 'none'} title={'All categories'} href={'/categoires'} />
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