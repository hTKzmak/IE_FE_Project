import { forwardRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from './Sales.module.css'
import ProductItem from "../ProductItem"
import NavigationBtn from "../UI/NavigationBtn"

const Sales = forwardRef((props, ref) => {

    const BASE_URL = 'http://localhost:3333'

    const [sales, setSales] = useState([])

    // GET запрос
    useEffect(() => {
        fetch(BASE_URL + '/products/all')
            .then(res => res.json())
            .then(data => {
                let filtered_data = data.filter(elem => elem.discont_price)
                filtered_data.splice(4, filtered_data.length)
                setSales(filtered_data)
            })
            document.body.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div ref={ref} className={style.main}>
            <div className="textAndBtn">
                <h1>Sales</h1>
                <div className="line"></div>
                <NavigationBtn title={'All sales'} href={'/products/sales'} />
            </div>
            <div className={style.sales}>
                {sales.map(elem =>
                    <div key={elem.id}>
                        <Link to={`/products/${elem.id}`}>
                            <ProductItem
                                id={elem.id}
                                img={BASE_URL + elem.image}
                                imgBtn={elem.image}
                                title={elem.title}
                                price={elem.price}
                                discount={elem.discont_price}
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
})

export default Sales