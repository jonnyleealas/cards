import './header.css'
import pathLogo from '../pics/path-logo.png'


const Header = () => {
    return (
        <header>
            {/* <div className='header-logo'> */}
            <div className='header-title'>
                {/* <img className='path-logo' src={pathLogo} alt='pic of a mountain' /> */}
                my travel journal
            </div>
        </header>
    )
}

export default Header