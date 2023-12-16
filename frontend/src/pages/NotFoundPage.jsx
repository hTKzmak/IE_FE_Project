import { useNavigate } from "react-router-dom";
import Button from "../components/UI/btn_card";

function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <div className="content">
            <h1>Page Not Found</h1>
            <p>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
            <Button title={"Go Home"} onclick={() => navigate('/')}/>
        </div>
    );
}

export default NotFoundPage;
