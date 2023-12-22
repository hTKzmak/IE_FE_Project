import style from './ProductItem.module.css'

function ProductItem({ id, img, title, price, discount }) {

    return (
        <div className={style.productItem} key={id}>
            <img src={img} alt="img_product" className={style.productImage} />
            <div className={style.productInfo}>
                <p>{title}</p>
                <div className={style.priceInfo}>
                    {discount !== null ? (
                        <>
                            <h1>${discount}</h1>
                            <h3>${price}</h3>
                        </>
                    ) : (
                        <h1>${price}</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductItem