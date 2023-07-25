import './Header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <header id='header-container'>
            <NavLink to='/'>Home</NavLink>
            Header
            <NavLink to='/addDestination'>Add a Destination</NavLink>
        </header>
    )
}

export default Header