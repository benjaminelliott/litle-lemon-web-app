const navItems = {
    sitemap: [
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
    ],
    contact: [
        {
            name: "Address",
            link: ""
        },
        {
            name: "Phone",
            link: ""
        },
        {
            name: "Email",
            link: ""
        }
    ],
    socials: [
        {
            icon: "icons/facebook.svg",
            link: "www.facebook.com"
        },
        {
            icon: "icons/instagram.svg",
            link: "www.instagram.com"
        },
        {
            icon: "icons/twitter.svg",
            link: "www.twitter.com"
        }
    ]
}

export const Footer = () => {
    return (
        <footer className="nav">
            <a href=""><img className="nav-logo" src="Logo .svg" alt="default" /></a>
            <ul className="nav-list-footer">
                <h1 className="nav-title-footer">Sitemap</h1>
                {navItems.sitemap.map(item => {
                    return (
                        <li><a href={item.link}>{item.name}</a></li>
                    )
                })}
            </ul>
            <ul className="nav-list-footer" >
                <h1 className="nav-title-footer">Contact</h1>
                {navItems.contact.map(item => {
                    return (
                        <li><a href={item.link}>{item.name}</a></li>
                    )
                })}
            </ul>
            <ul className="nav-list-footer" >
                <h1 className="nav-title-footer">Socials</h1>
                <div className="nav-list-footer-socials">
                    {navItems.socials.map(item => {
                        return (
                                <a href={item.link}><img src={item.icon} className="nav-list-footer-social"/></a>
                        )
                    })}
                </div>
            </ul>
        </footer>
    );
};