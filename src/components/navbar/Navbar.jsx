import React,{useEffect} from 'react';
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode'
import logo from "../../assets/logo-stackoverflow.png";
import search from "../../assets/search.png";
import Avatar from "../avatar/avatar";
import { setCurrentUser } from '../../actions/currentUser';


const Navbar = () => {

    const dispatch = useDispatch();
    var User = useSelector((state) => (state.currentUser));
    const navigate = useNavigate();

    
    
    useEffect(() => {
        const token = User?.token;
        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogOut()
            }
        }
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('profile')) ));
    },[dispatch])

    const handleLogOut = () => {
        dispatch({type: 'LOGOUT'})
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    return (
        <nav className='main-nav'>
        <div className='navbar'>
            <Link to="/" className='nav-item nav-logo'>
                <img src={logo} alt="logo" />
            </Link>
            <Link to="/" className='nav-item nav-btn'>About</Link>
            <Link to="/" className='nav-item nav-btn'>Products</Link>
            <Link to="/" className='nav-item nav-btn'>For teams</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" className='search-icon' style={{ width: "18px", height: "16px"}} />
            </form>

            {User === null ?
                <Link to="/Auth" className='nav-item nav-links'>Log in</Link> :
                <>
                    <Avatar backgroundColor="#009dff" px="5px" py="10px" borderRadius="50%" color="white"> <Link to={`/Users/${User?.result?._id}`} style={{ color: 'white', textDecoration: 'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link> </Avatar>
                    <button className='nav-item nav-links' onClick={handleLogOut}>Log Out</button>
                </>
            }
        </div>
        </nav>
    )
}

export default Navbar;