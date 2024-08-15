import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import SearchBarButtons from './assets/SearchBarButtons';

function GoogleLogo(){

    return(
        <div className="logo-container">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" id="google-logo" alt="Google Logo"/>
            <div className="searchbar-contents">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#babdbf",}} />
                <input type="search" id="search-input"/>
                <FontAwesomeIcon icon={faMicrophone} style={{color: "#babdbf",}} className='search-icons'/>
                <FontAwesomeIcon icon={faCamera} style={{color: "#babdbf",}} className='search-icons'/>
            </div>
                <SearchBarButtons />
        </div>
    )

}


export default GoogleLogo