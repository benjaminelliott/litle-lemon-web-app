import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useRef, useState } from 'react'

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
                                <h1 className='text-section-title'>Hey, {props.values.firstName} {props.values.lastName.charAt(0)}!</h1>
                                <p className='text-lead'>User Details</p>
                            </DrawerHeader>
                            <DrawerBody>
                                <div className='user-details'>
                                    <div className='user-detail'>
                                        <p><strong>Name:</strong></p>
                                        <p>{props.values.firstName}</p>
                                        <p>{props.values.lastName}</p>
                                    </div>
                                    <div className='user-detail'>
                                        <p><strong>Email:</strong></p>
                                        <p>{props.values.email}</p>
                                    </div>
                                    <div className='user-detail'>
                                        <p><strong>Phone:</strong></p>
                                        <p>{props.values.phone}</p>
                                    </div>
                                    <div className='user-detail'>
                                        <p><strong>Password:</strong></p>
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword
                                            ? <ViewIcon />
                                            : <ViewOffIcon />
                                        }
                                        </button>
                                        
                                        <p className={ showPassword ? "show-password" : "hide-password"}>{props.values.password}</p>
                                    </div>
                                    <div className='user-detail'>
                                        <p><strong>Address:</strong></p>
                                        <p>{props.values.address}</p>
                                        <p>{props.values.zip}</p>
                                    </div>
                                    <div className='user-detail'>
                                        <p><strong>Delivery:</strong></p>
                                        {
                                            props.zips.includes(Number(localStorage.getItem("zip")))
                                            ?   <p className='delivery-success'>Congrats! Little Lemon can deliver to your address.</p>
                                            :   <p className='delivery-failure'>Unfortunately, Little Lemon cannot offer delivery to your address.</p>
                                        }
                                    </div>
                                </div>
                            </DrawerBody>
                            <DrawerFooter>
                                <div className='user-buttons'>
                                    <button className="buttonh1">Update</button>
                                    <button className="buttonh1" onClick={() => props.setLoggedIn(false)}>Logout</button>
                                </div>
                            </DrawerFooter>
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
                                    <p className='text-lead'>Please login to access your account.</p>
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
                                        <p className="error">{props.touched.email && props.errors.email}</p>
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
                                        <p className="error">{props.touched.password && props.errors.password}</p>
                                    </div>
                                    <button className="buttonh1" onClick={passwordCheck}>Login</button>
                                </form>
                            </DrawerBody>
                            <DrawerFooter>
                                {
                                    <div className='text-lead login-error'>
                                        {
                                            incorrectLogin && <p>Incorrect login details</p>
                                        }
                                    </div>
                                }
                            </DrawerFooter>
                        </DrawerContent>
                    </>
                }
            </Drawer>
        </>
    )
}