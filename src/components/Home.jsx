import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to={"/login"}>to login</Link>
        </>
    )
}