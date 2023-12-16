import style from './ProductItem.module.css'

function ProductItem({ id, img, title, price, discount }) {
    return (
        <div className={style.productItem} key={id}>
            <img src={img} alt="img_product" />
            <p>{title}</p>
            <h2>${price}</h2>
            <h3>{discount !== null ? ('$' + discount) : ''}</h3>
        </div>
    )
}

export default ProductItem