import Logo from '../../public/image/logo.jpg'
import { useState } from 'react'
export const Header = () => {
    const [isAuth, setIsAuth] = useState(true)
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={Logo} alt="Cuisine" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={() => setIsAuth(!isAuth)}>{isAuth ? 'Login' : 'Logout'}</button>
                </ul>
            </div>
        </div>
    )

}