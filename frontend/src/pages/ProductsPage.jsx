import { Link, useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllProducts, fetchAllProductsSale, fetchProductsByCategories } from "../asyncActions/products"
import ProductItem from "../components/ProductItem"
import { filterByOptionAction, filterByPriceAction, filterBySaleAction } from "../store/productListReducer"


function ProductPage({ type }) {
    const BASE_URL = 'http://localhost:3333/'
    const { categories_name, products } = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()

    // сортировка по отображению товаров со скидкой и по цене
    const productsList = products.filter(elem => elem.isShowSale && elem.isShowPrice)

    useEffect(() => {
        if (type === 'all') {
            dispatch(fetchAllProducts())
        }
        else if (type === 'sale') {
            dispatch(fetchAllProductsSale())
        }
        else if (type === 'categories') {
            dispatch(fetchProductsByCategories(id))
        }
        document.body.scrollIntoView({ behavior: 'smooth' })
    }, [location.pathname])


    function checkboxHandle(e) {
        dispatch(filterBySaleAction(e.target.checked))
    }

    function formHandler(e) {
        let form_data = new FormData(e.target.parentElement)
        let data = Object.fromEntries(form_data)
        data.min = (data.min) ? +data.min : 0
        data.max = (data.max) ? +data.max : Infinity
        console.log(data)
        dispatch(filterByPriceAction(data))
    }

    function optionHandler(e) {
        dispatch(filterByOptionAction(e.target))
    }

    return (
        <div className="content section">
            <h1>{categories_name}</h1>
            <div className="form">
                <form onChange={formHandler}>
                    Price
                    <input className="inputForm" name="min" type="number" placeholder="from" />
                    <input className="inputForm" name="max" type="number" placeholder="to" />
                </form>
                <label style={{ display: (categories_name) == 'Discounted products' ? 'none' : 'flex' }}>
                    Discounted items:
                    <input type="checkbox" onClick={checkboxHandle} />
                </label>
                Sorted
                <select className="select" onClick={optionHandler}>
                    <option id="0">Default</option>
                    <option id="1">From $0 to $10</option>
                    <option id="2">From $10 to $20</option>
                    <option id="3">From $20 to $30</option>
                    <option id="4">From $30 to $50</option>
                </select>
            </div>
            <div className="productsList">
                {productsList.map(elem =>
                    <Link to={`/products/${elem.id}`}>
                        <ProductItem
                            id={elem.id}
                            img={BASE_URL + elem.image}
                            title={elem.title}
                            price={elem.price}
                            discount={elem.discont_price}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ProductPage;
