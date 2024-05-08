import portrait from "../assets/circleme.png";
import "../styling/Home.css"

const Home = () => {
    return(
        <div id="home-content">
            <img id="portrait" src={portrait} />
        </div>
    )
}

export default Home;