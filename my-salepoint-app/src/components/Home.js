import react from "react"
import { Link, Route } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/items">Peek All Listings</Link>
        </div>
    )
}

export default Home;

