import { Outlet, Link } from "react-router-dom";
import { LoginBar } from "./LoginBar";
import { useDisclosure } from "@chakra-ui/react";
import { useShoppingCart } from "context/ShoppingCartContext";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import { CreateBar } from "./CreateBar";

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
            name: "Booking",
            link: "/booking"
        },
        {
            key: 4,
            name: "Cart",
            link: "/cart"
        }
    ],
    contact: [
        {
            key: 0,
            name: "Address",
            data: "732 Evergreen Terrace, Chicago, IL 60607",
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

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required")
            .min(2, "First name must be at least 2 characters"),
        lastName: Yup.string()
            .required("First name is required")
            .min(1, "First name must be at least 2 characters"),
        email: Yup.string()
          .required("Email is a required field")
          .email("Invalid email format"),
        password: Yup.string()
          .required("Password is a required field")
          .min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string()
            .required("Please confirm your password")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
      });

    const { cartQuantity }  = useShoppingCart()

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                firstName: (localStorage.getItem("firstName") || ""),
                lastName: (localStorage.getItem("lastName") || ""),
                email: (localStorage.getItem("email") || ""),
                phone: (localStorage.getItem("phone") || ""),
                password: (localStorage.getItem("password") || ""),
                confirmPassword:"",
                address:(localStorage.getItem("address") || "")
            }}
            onSubmit={(values) => {
                //Object.entries(values).map((k:any,v:any) => {
                //    return localStorage.setItem(k, v)
                //})
                localStorage.setItem("lastName", values.lastName)
                alert(JSON.stringify(values));
            }}
        >
            {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
            <>
                <nav className="top-nav">
                    <div className="top-nav-top">
                        <Link to={"/"}><img className="nav-logo" src="Logo .svg" alt="default" /></Link>
                        <ul className="nav-list-header">
                            {navItems.sitemap.map(item => {
                                return (
                                    <li key={item.key}><Link to={item.link}>{item.name}</Link></li>
                                );
                            })}
                            {<span className="nav-cart-quantity" style={cartQuantity ? { opacity: 1 } : { opacity: 0 }}><Link to={"/cart"}><button>{cartQuantity}</button></Link></span>}
                            <button onClick={onOpen}>Login</button>
                        </ul>
                    </div>
                    <div className="top-nav-bottom">
                        <LoginBar
                            isOpen={isOpen}
                            onOpen={onOpen}
                            onClose={onClose}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                        <CreateBar
                            isOpen={isOpen}
                            onOpen={onOpen}
                            onClose={onClose}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </nav><Outlet /><footer className="bottom-nav">
                        <Link to={"/"}><img className="nav-logo" src="Logo .svg" alt="default" /></Link>
                        <ul className="nav-list-footer">
                            <h1 className="nav-title-footer">Sitemap</h1>
                            {navItems.sitemap.map(item => {
                                return (
                                    <li key={item.key}><Link to={item.link}>{item.name}</Link></li>
                                );
                            })}
                        </ul>
                        <ul className="nav-list-footer">
                            <h1 className="nav-title-footer">Contact</h1>
                            {navItems.contact.map(item => {
                                return (
                                    <li key={item.key}><Link to={item.link}>{item.name}: {item.data}</Link></li>
                                );
                            })}
                        </ul>
                        <ul className="nav-list-footer">
                            <h1 className="nav-title-footer">Socials</h1>
                            <div className="nav-list-footer-socials">
                                {navItems.socials.map(item => {
                                    return (
                                        <Link to={item.link} key={item.key}><img src={item.icon} className="nav-list-footer-social" alt={item.name} /></Link>
                                    );
                                })}
                            </div>
                        </ul>
                    </footer>
                </>
        )}
      </Formik>
    );
}