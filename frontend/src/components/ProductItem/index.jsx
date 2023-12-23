import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import style from './ProductItem.module.css'
import { addNewItemAction } from '../../store/cartReducer'

function ProductItem({ id, img, title, price, discount }) {

    // const { products } = useSelector(store => store.productList)
    // const dispatch = useDispatch()

    return (
        <div className={style.productItem} key={id}>
            <div className={style.salesMedia}>
                {discount !== null ? (
                    <div className={style.rebate}>{Math.round((price - discount) / price * 100)}%</div>
                ) : ''}
                {/* <Button onclick={() => dispatch(addNewItemAction({ id, count: 1 }))} title={'Add to cart'} /> */}
                <img src={img} alt="img_product" className={style.productImage} />
            </div>
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