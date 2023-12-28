import { useDispatch, useSelector } from 'react-redux'
import { filterByOptionAction, filterByPriceAction, filterBySaleAction } from '../../store/productListReducer'
import style from './FilterForm.module.css'

function FilterForm() {

    const { categories_name } = useSelector(store => store.productList)
    const dispatch = useDispatch()

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
        <div className={style.form}>
            <form onChange={formHandler}>
                Price
                <input className={style.inputForm} name="min" type="number" placeholder="from" />
                <input className={style.inputForm} name="max" type="number" placeholder="to" />
            </form>
            <label style={{ display: (categories_name) === 'Discounted products' ? 'none' : 'flex' }}>
                Discounted items:
                <input className={style.checkbox} type="checkbox" onClick={checkboxHandle} />
            </label>
            Sorted
            <select className={style.select} onClick={optionHandler}>
                <option id="default">Default</option>
                <option id="zetoToTen">From $0 to $10</option>
                <option id="tenToTwenty">From $10 to $20</option>
                <option id="twentyToThirty">From $20 to $30</option>
                <option id="thirtyToFifty">From $30 to $50</option>
            </select>
        </div>
    )
}

export default FilterForm