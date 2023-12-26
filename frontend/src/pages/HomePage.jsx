import { useRef, useState } from "react";
import Banner from "../components/Banner";
import DiscountForm from "../components/DiscountForm";
import Sales from "../components/Sales";
import CategoriesList from "../components/CategoriesList";
import ModalWindow from "../components/ModalWindow";

function HomePage() {

    let scrollRef = useRef();
    const [modalActive, setModalActive] = useState(false)

    function salesScroll() {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    let categoriesInHomePage = true;

    return (
        <div className="content">
            <ModalWindow activate={modalActive} setActivate={setModalActive} text={<p>You received a 5% discount on your first order.</p>} />
            <Banner salesScroll={salesScroll} />
            <div className="section">
                <CategoriesList categoriesInHomePage={categoriesInHomePage} />
                <DiscountForm
                    setActivate={setModalActive}
                />
                <Sales ref={scrollRef}/>
            </div>
        </div>
    );
}

export default HomePage;
