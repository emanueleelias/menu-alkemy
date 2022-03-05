import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import food from '../assets/food.svg';
import { useAuth } from '../context/useContextAuth';

const Navbar = () => {

    const { token, handleLogout } = useAuth();

    const navigate =  useNavigate()

    const logOut = ()=>{
        navigate("/login")
        localStorage.removeItem("token")
    }

    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to={'/home'}><img style={{ width: '100px' }} className='img-fluid' src={food} alt='Logo de comida' /></Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/search"}>Search Recipes</Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        {token && (
                            <button className="btn btn-outline-danger" type="submit" onClick={()=>{handleLogout()}}>LogOut</button>
                        )}
                        
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;