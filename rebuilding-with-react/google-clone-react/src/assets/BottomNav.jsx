

function BottomNav(){

return(
    <nav className="d-flex flex-column flex-md-row bottom-nav-container">
        <ul className="bottom-nav-left order-2 order-md-1">
            <a href='#'>Advertising</a>
            <a href='#'>Business</a>
            <a href='#'>How Search Works</a>
        </ul>
        <ul className="bottom-nav-center order-1">
            <a href='#'>🍃 Our third decade of climate action: join us</a>
        </ul>
        <ul className="bottom-nav-right order-3 order-md-2">
            <a href='#'>Privacy</a>
            <a href='#'>Terms</a>
            <a href='#'>Settings</a>
        </ul>
    </nav>
)

}

export default BottomNav;