import { useSelector } from "react-redux"
import FilterForm from "../components/FilterForm"
import ProductsList from "../components/ProductsList"

function ProductPage({ type }) {
    const { categories_name } = useSelector(store => store.productList)

    return (
        <div className="content section">
            <h1>{categories_name}</h1>
            <FilterForm />
            <ProductsList type={type} />
        </div>
    );
}

export default ProductPage;