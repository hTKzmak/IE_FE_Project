import style from './Category.module.css'

function Category({id, img, title}) {
    return (
        <div className={style.categoryItem} key={id}>
            <img className={style.categoryImage} src={img} alt="img" />
            <p>{title}</p>
        </div>
    )
}

export default Category