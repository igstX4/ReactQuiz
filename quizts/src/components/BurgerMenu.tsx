import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/BurgerMenu.scss";
interface BurgerMenuI {
    userName: string;
    id: string;
}

const BurgerMenu: FC<BurgerMenuI> = ({ userName, id }) => {
    
    const [value, setValue] = React.useState(false);
    const navigate = useNavigate();
    
    const handlebtn = () => {
        navigate(`/profile/${id}`);
        setValue(false);
    };

    return (
        <div className="hamburger-menu">
            <input
                id="menu__toggle"
                type="checkbox"
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
            />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className="menu__box">
                <div id="logo">
                    <h1 className="burger_title">N-Quiz</h1>
                </div>
                {
                    userName === 'Loading' ? (
                        <div className="signBurgerDiv">
                            <NavLink onClick={() => setValue(false)} to="/login" className="menu__item">
                                Sign in
                            </NavLink>
                            <NavLink onClick={() => setValue(false)} to="/register" className="menu__item">
                                Sign up
                            </NavLink>
                        </div>
                    ) : <h1 onClick={handlebtn} className="userName">You loggined how: {userName}
                </h1>
                }
                <hr style={{margin: '20px'}}/>
                <li onClick={() => setValue(false)}>
                    <NavLink className="menu__item" to="/">
                        Main
                    </NavLink>
                </li>
                <li onClick={() => setValue(false)}>
                    <NavLink className="menu__item" to="/articles">
                        Articles
                    </NavLink>
                </li>
                <li onClick={() => setValue(false)}>
                    <NavLink className="menu__item" to="/tests">
                        Tests
                    </NavLink>
                </li>
                <li onClick={() => setValue(false)}>
                    <NavLink className="menu__item" to="/createTest">
                        Create test
                    </NavLink>
                </li>
                <li onClick={() => setValue(false)}>
                    <NavLink className="menu__item" to="/articleCreate">
                        Create article
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default BurgerMenu;
