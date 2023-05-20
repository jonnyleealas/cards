import './header.css'
import pathLogo from '../pics/path-logo.png'


const Header = () => {
    return (
        <header>
            <div className='header-logo'>
                {/* <img className='path-logo' src={pathLogo} alt='pic of a mountain' /> */}
                <h2 className='header-title'>my travel journal</h2>
            </div>
        </header>
    )
}

export default Header