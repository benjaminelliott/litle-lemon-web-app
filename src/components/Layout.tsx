import { Outlet, Link } from "react-router-dom";

const navItems = {
    sitemap: [
        {
            name: "Home",
            link: ""
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Menu",
            link: "/menu"
        },
        {
            name: "Order Online",
            link: "/order"
        },
        {
            name: "Booking",
            link: "/booking"
        },
        {
            name: "Login",
            link: "/login"
        }
    ],
    contact: [
        {
            name: "Address",
            data: "732 Evergreen Terrace, Chicago, IL 60007",
            link: "https://goo.gl/maps/fLRcB2tszFgDGgPd7"
        },
        {
            name: "Phone",
            data: "(312) 555-5555",
            link: "tel:312-983-7100"
        },
        {
            name: "Email",
            data: "contact@littlelemon.biz",
            link: "mailto:contact@littlelemon.biz"
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
export const Layout = () => {
    return (
        <>
            <nav className="nav">
                <a href=""><img className="nav-logo" src="Logo .svg" alt="default" /></a>
                <ul className="nav-list-header">
                    {navItems.sitemap.map(item => {
                        return (
                            <li><Link to={item.link}>{item.name}</Link></li>
                        )
                    })}
                </ul>
            </nav>
            <Outlet />
            <footer className="nav">
                <a href=""><img className="nav-logo" src="Logo .svg" alt="default" /></a>
                <ul className="nav-list-footer">
                    <h1 className="nav-title-footer">Sitemap</h1>
                    {navItems.sitemap.map(item => {
                        return (
                            <li><Link to={item.link}>{item.name}</Link></li>
                        )
                    })}
                </ul>
                <ul className="nav-list-footer" >
                    <h1 className="nav-title-footer">Contact</h1>
                    {navItems.contact.map(item => {
                        return (
                            <li><Link to={item.link}>{item.name}: {item.data}</Link></li>
                        )
                    })}
                </ul>
                <ul className="nav-list-footer" >
                    <h1 className="nav-title-footer">Socials</h1>
                    <div className="nav-list-footer-socials">
                        {navItems.socials.map(item => {
                            return (
                                    <Link to={item.link}><img src={item.icon} className="nav-list-footer-social"/></Link>
                            )
                        })}
                    </div>
                </ul>
            </footer>
        </>
    );
}