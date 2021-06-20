import react from "react"
import { Link, Route } from "react-router-dom";

const Home = () => {
    return (
        <div className='profileImag' style={{height:'100%', width:'100%'}} >
            <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            </nav>
            <h1>Welcome to Sale Point</h1>
            <h2>Buy Smart and Sell with Confidence</h2>
            <div>
            <Link to="/items">Peek All Listings</Link>
            </div>
        </div>
    )
}

export default Home;

