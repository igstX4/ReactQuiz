import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { logout } from "../redux/slices/UserSlice";
import '../styles/Header.scss'
import BurgerMenu from "./BurgerMenu";
const Header = () => {
    
    const isAuth = useAppSelector((state) => state.auth.data);
    const dispatch = useAppDispatch();

    const onSubmit = () => {
        dispatch(logout());
        window.localStorage.removeItem("token");
    };

    return (
        <>
        <div className="header">
            <h1 className="title">N-QUIZ</h1>
            <div className="headerItems">
                <div className="headerLinks">
                    <div className="vline" />
                    <NavLink to="/" className="headerLink">
                        Main
                    </NavLink>
                    <NavLink to="/articles" className="headerLink">
                        Articles
                    </NavLink>
                    <NavLink to="/tests" className="headerLink">
                        Tests
                    </NavLink>
                </div>
                {isAuth && <NavLink to={`/profile/${isAuth?._id}`} className="fullName headerLink">You loggined how: {isAuth?.fullName}</NavLink>}
                <div className="login">
                    <div className="vline" />
                    {isAuth ? (
                        <>
                            <NavLink className="headerLink" to="/createTest">
                                Create Test
                            </NavLink>
                            <NavLink className="headerLink" to="/articleCreate">
                                Create Post
                            </NavLink>
							<span className="headerLink" onClick={onSubmit}>
                                Sign out
                            </span>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="headerLink">
                                Sign in
                            </NavLink>
                            <NavLink to="/register" className="headerLink">
                                Sign up
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
        <div className="burgerdiv">
            <BurgerMenu userName={isAuth ? isAuth.fullName : 'Loading'} id={isAuth ? isAuth._id : 'Loading'}/>
        </div>
        </>
    );
};
export default Header;
