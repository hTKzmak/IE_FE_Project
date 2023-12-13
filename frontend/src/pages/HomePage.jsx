import { useRef } from "react";
import Banner from "../components/Banner";
import DiscountForm from "../components/DiscountForm";
import Sales from "../components/Sales";
import CategoriesList from "../components/CategoriesList";

function HomePage() {

    let scrollRef = useRef();

    function salesScroll() {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="content">
            <Banner salesScroll={salesScroll} />
            <div className="section">
                <CategoriesList />
                <DiscountForm />
                <Sales ref={scrollRef} />
            </div>
        </div>
    );
}

export default HomePage;
