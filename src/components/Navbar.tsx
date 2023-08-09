const navItems = [
    {
        name: "Home",
        link: ""
    },
    {
        name: "About",
        link: ""
    },
    {
        name: "Menu",
        link: ""
    },
    {
        name: "Order Online",
        link: ""
    },
    {
        name: "Booking",
        link: ""
    },
    {
        name: "Login",
        link: ""
    }
]
export const Navbar = () => {
    return (
        <nav className="nav">
            <a href=""><img className="nav-logo" src="Logo .svg" alt="default" /></a>
            <ul className="nav-list-header">
                {navItems.map(item => {
                    return (
                        <li><a href={item.link}>{item.name}</a></li>
                    )
                })}
            </ul>
        </nav>
    );
}