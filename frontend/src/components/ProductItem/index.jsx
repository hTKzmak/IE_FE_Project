import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import style from './ProductItem.module.css'
import { addNewItemAction } from '../../store/cartReducer'
import { Link } from 'react-router-dom'

function ProductItem({ id, img, imgBtn, title, price, discount }) {

    const cart = useSelector(store => store.cartList)
    const dispatch = useDispatch()


    return (
        <div className={style.productItem} key={id}>
            <div className={style.salesMedia}>
                {discount !== null ? (
                    <div className={style.rebate}>{Math.round((price - discount) / price * 100)}%</div>
                ) : ''}
                <Button
                    onclick={() => dispatch(addNewItemAction({

                        id: id,
                        title: title,
                        price: price,
                        discont_price: (discount ? discount : null),
                        count: 1,
                        image: imgBtn

                    }))} title={cart.find(item => item.id === id) ? 'Added' : 'Add to cart'} disabled={cart.find(item => item.id === id) ? true : false} />
                <img src={img} alt="img_product" className={style.productImage} />
            </div>
            <Link to={`/products/${id}`}>
                <div className={style.productInfo}>
                    <p>{title}</p>
                    <div className={style.priceInfo}>
                        {discount !== null ? (
                            <>
                                <h1>${discount}</h1>
                                <h3 className='discountPrice'>${price}</h3>
                            </>
                        ) : (
                            <h1>${price}</h1>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem