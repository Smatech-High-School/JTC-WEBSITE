import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <div>
            <nav>
                <div>
                    <div>
                        <img />
                        <Link to="/">
                            Home
                        </Link>

                        <Link to="classes">
                            Classes
                        </Link>

                        <Link to="records">
                            Records
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;