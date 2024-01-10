import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const navigate = useNavigate();
    return (
        <main>
            <h1>Order Confirmed!</h1>
            <button onClick={ ( )=> navigate('/') }>Go back</button>
        </main>
    );
}

export default OrderSummary;

