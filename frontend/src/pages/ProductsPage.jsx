import { Link, useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllProducts, fetchAllProductsSale, fetchProductsByCategories } from "../asyncActions/products"
import ProductItem from "../components/ProductItem"


function ProductPage({ type }) {
    const BASE_URL = 'http://localhost:3333/'
    const { categories_name, products } = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()

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

    return (
        <div className="content section">
            <h1>{categories_name}</h1>
            <div className="productsList">
                {products.map(elem =>
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
