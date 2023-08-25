import { useContext, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { LoginBar } from "./LoginBar";
import { useDisclosure, useOutsideClick } from "@chakra-ui/react";
import { animated } from "@react-spring/web";
import { UserContext } from "App";

const navItems = {
    sitemap: [
        {
            key: 0,
            name: "Home",
            link: ""
        },
        {
            key: 1,
            name: "About",
            link: "/about"
        },
        {
            key: 2,
            name: "Menu",
            link: "/menu"
        },
        {
            key: 3,
            name: "Order",
            link: "/order"
        },
        {
            key: 4,
            name: "Booking",
            link: "/booking"
        }
    ],
    contact: [
        {
            key: 0,
            name: "Address",
            data: "732 Evergreen Terrace, Chicago, IL 60007",
            link: "https://goo.gl/maps/fLRcB2tszFgDGgPd7"
        },
        {
            key: 1,
            name: "Phone",
            data: "(312) 555-5555",
            link: "tel:312-983-7100"
        },
        {
            key: 3,
            name: "Email",
            data: "contact@littlelemon.biz",
            link: "mailto:contact@littlelemon.biz"
        }
    ],
    socials: [
        {
            key: 0,
            name: "facebook",
            icon: "icons/facebook.svg",
            link: "www.facebook.com"
        },
        {
            key: 1,
            name: "instagram",
            icon: "icons/instagram.svg",
            link: "www.instagram.com"
        },
        {
            key: 2,
            name: "twitter",
            icon: "icons/twitter.svg",
            link: "www.twitter.com"
        }
    ]
}

export const Layout = (props: any) => {

    const { user, setUser }  = useContext<any>(UserContext);

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <nav className="top-nav">
                <div className="top-nav-top">
                    <Link to={"/"}><img className="nav-logo" src="Logo .svg" alt="default" /></Link>
                    <ul className="nav-list-header">
                        {
                            navItems.sitemap.map(item => {
                                return (
                                    <li key={item.key}><Link to={item.link}>{item.name}</Link></li>
                                )
                            })
                        }
                        <button onClick={onOpen}>Login</button>
                        <Link to={"/order"}>{user.basket.length}</Link>
                    </ul>
                </div>
                <div className="top-nav-bottom">
                    <LoginBar isOpen={isOpen} onOpen={onOpen} onClose={onClose} user={user}/>
                </div>
            </nav>
            <Outlet />
            <footer className="bottom-nav">
            <Link to={"/"}><img className="nav-logo" src="Logo .svg" alt="default" /></Link>
                <ul className="nav-list-footer">
                    <h1 className="nav-title-footer">Sitemap</h1>
                    {navItems.sitemap.map(item => {
                        return (
                            <li key={item.key}><Link to={item.link}>{item.name}</Link></li>
                        )
                    })}
                </ul>
                <ul className="nav-list-footer" >
                    <h1 className="nav-title-footer">Contact</h1>
                    {navItems.contact.map(item => {
                        return (
                            <li key={item.key}><Link to={item.link}>{item.name}: {item.data}</Link></li>
                        )
                    })}
                </ul>
                <ul className="nav-list-footer" >
                    <h1 className="nav-title-footer">Socials</h1>
                    <div className="nav-list-footer-socials">
                        {navItems.socials.map(item => {
                            return (
                                    <Link to={item.link} key={item.key}><img src={item.icon} className="nav-list-footer-social" alt={item.name}/></Link>
                            )
                        })}
                    </div>
                </ul>
            </footer>
        </>
    );
}