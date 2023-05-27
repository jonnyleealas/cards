import './header.css'
import pathLogo from '../pics/path-logo.png'


const Header = () => {
    return (
        <header>
            
         
                
                <span className='path-logo'>

                <img  src={pathLogo} alt='pic of a mountain' />
                </span>
            
                <span className='header-title'>

                my travel journal.
                </span>
           
        </header>
    )
}

export default Header