import { useParams } from "react-router-dom";

const UserDetails = () => {
    const x = useParams();
    
    let { userId } = useParams();
    userId = userId ? userId : 1;
    return (
        <main>
            <h1>{`User ${userId}`}</h1>
        </main>
    )
}

export default UserDetails;