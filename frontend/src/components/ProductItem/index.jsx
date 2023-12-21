import style from './ProductItem.module.css'

function ProductItem({ id, img, title, price, discount }) {

    return (
        <div className={style.productItem} key={id}>
            <img src={img} alt="img_product" className={style.productImage} />
            <div className={style.productInfo}>
                <p>{title}</p>
                <div className={style.priceInfo}>
                    <h2>${price}</h2>
                    <h3>{discount !== null ? ('$' + discount) : ''}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductItem