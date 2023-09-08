import { MoonIcon, SunIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Drawer, DrawerBody, Text, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useColorMode, Icon, color, Button } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";

export const LoginBar = (props: any) => {

    const btnRef = useRef(null)

    const passwordCheck = () => {
        if(props.values.loginPassword === props.values.password) {
            return props.setLoggedIn(true);
        } else {
            return setIncorrectLogin(true)
        }
    }

    const [ incorrectLogin, setIncorrectLogin ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);

    return (
        <>
            <Drawer
                isOpen={props.isOpen}
                placement='top'
                onClose={props.onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                {
                    localStorage.getItem("email") && localStorage.getItem("password") && props.loggedIn &&
                    <>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                                <div className='user-header'>
                                    <h1 className='user-details-title'>Hey, {props.values.firstName} {props.values.lastName.charAt(0)}!</h1>
                                </div>
                            </DrawerHeader>
                            <DrawerBody>
                                <div className='user-details'>
                                    <div className='user-detail'>
                                        <Text><strong>Name:</strong></Text>
                                        <Text>{props.values.firstName}</Text>
                                        <Text>{props.values.lastName}</Text>
                                    </div>
                                    <div className='user-detail'>
                                        <Text><strong>Email:</strong></Text>
                                        <Text>{props.values.email}</Text>
                                    </div>
                                    <div className='user-detail'>
                                        <Text><strong>Phone:</strong></Text>
                                        <Text>{
                                                "(" +
                                                props.values.phone.charAt(0) +
                                                props.values.phone.charAt(1) +
                                                props.values.phone.charAt(2) +
                                                ") " +
                                                props.values.phone.charAt(3) +
                                                props.values.phone.charAt(4) +
                                                props.values.phone.charAt(5) +
                                                "-" +
                                                props.values.phone.charAt(6) +
                                                props.values.phone.charAt(7) +
                                                props.values.phone.charAt(8) +
                                                props.values.phone.charAt(9)
                                            }
                                        </Text>
                                    </div>
                                    <div className='user-detail'>
                                        <Text><strong>Password:</strong></Text>
                                        <button className="password-button" type="button" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword
                                            ? <ViewIcon />
                                            : <ViewOffIcon />
                                        }
                                        </button>
                                        <Text className={ showPassword ? "show-password" : "hide-password"}>{props.values.password}</Text>
                                    </div>
                                    <div className='user-detail'>
                                        <Text><strong>Address:</strong></Text>
                                        <Text>{props.values.address}</Text>
                                        <Text>{props.values.zip}</Text>
                                    </div>
                                    <div className='user-detail'>
                                        <Text><strong>Delivery:</strong></Text>
                                        {
                                            props.zips.includes(Number(localStorage.getItem("zip")))
                                            ?   <Text className='delivery-success'>Congrats! Little Lemon can deliver to your address.</Text>
                                            :   <Text className='delivery-failure'>Unfortunately, Little Lemon cannot offer delivery to your address.</Text>
                                        }
                                    </div>
                                    <div className='user-detail'>
                                        <Text><strong>Reservations:</strong></Text>
                                        {
                                            localStorage.getItem("bookingTime")
                                            ?   <><Text>{localStorage.getItem("bookingTime")} on {localStorage.getItem("bookingDate")}, party of {localStorage.getItem("bookingGuests")}</Text></>
                                            :   <Text>You currently have no reservations.</Text>
                                        }
                                    </div>
                                    <Button
                                        className="buttonh1"
                                        onClick={() => props.setLoggedIn(false)}
                                        leftIcon={<RiLogoutCircleLine />}
                                    >Logout</Button>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </>
                }
                {
                    localStorage.getItem("email") && localStorage.getItem("password") && !props.loggedIn &&
                    <>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                                    <h1 className='text-section-title'>Welcome back, {localStorage.getItem("firstName")} {localStorage.getItem("lastName")?.charAt(0)}!</h1>
                                    <Text className='text-lead'>Please login to access your account.</Text>
                            </DrawerHeader>
                            <DrawerBody>
                                <form
                                    className='login'
                                    onSubmit={props.handleSubmit}
                                >
                                    <div>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.email}
                                            placeholder="Enter email"
                                            className="input-login" />
                                        <Text className="error">{props.touched.email && props.errors.email}</Text>
                                    </div>
                                    <div>
                                        <input
                                            id="loginPassword"
                                            type="password"
                                            name="loginPassword"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.loginPassword}
                                            placeholder="Enter password"
                                            className="input-login" />
                                        <Text className="error">{props.touched.password && props.errors.password}</Text>
                                    </div>
                                    <Button
                                        className="buttonh1"
                                        onClick={passwordCheck}
                                        rightIcon={<RiLoginCircleLine />}
                                    >Login</Button>
                                </form>
                                {
                                    <div className='text-lead login-error'>
                                        {
                                            incorrectLogin && <p>Incorrect login details</p>
                                        }
                                    </div>
                                }
                            </DrawerBody>
                        </DrawerContent>
                    </>
                }
            </Drawer>
        </>
    )
}