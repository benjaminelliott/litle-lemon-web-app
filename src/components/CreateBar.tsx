import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useRef } from 'react'

export const CreateBar = (props: any) => {

    const btnRef = useRef(null)

    return (
        <>
            <Drawer
                isOpen={props.isOpen}
                placement='top'
                onClose={props.onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <h1 className='text-section-title'>Welcome to Little Lemon!</h1>
                    <p className='text-lead'>Please create a user account so you can arrange collections and deliveries</p>
                </DrawerHeader>
                <DrawerBody>
                        <form
                        className='create'
                        noValidate
                        onSubmit={props.handleSubmit}
                    >
                        <input
                            type="text"
                            name="firstName"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.firstName}
                            placeholder="First name"
                            className={props.errors.firstName ? "create-login" : "create-login-confirmed"}
                            id="firstName"
                        />
                        <input
                            type="text"
                            name="lastName"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.lastName}
                            placeholder="Last name"
                            className={props.errors.lastName ? "create-login" : "create-login-confirmed"}
                            id="lastName"
                        />
                        <input
                            type="text"
                            name="phone"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.phone}
                            placeholder="Enter phone"
                            className={props.errors.phone ? "create-login" : "create-login-confirmed"}
                            id="phone"
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            placeholder="Enter email"
                            className={props.errors.email ? "create-login" : "create-login-confirmed"}
                            id="email"
                        />
                         <input
                            type="text"
                            name="address"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.address}
                            placeholder="Enter house number and street"
                            className={props.errors.address ? "create-login" : "create-login-confirmed"}
                            id="address"
                        />
                        <input
                            type="text"
                            name="zip"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.zip}
                            placeholder="Enter zip"
                            className={props.errors.zip ? "create-login" : "create-login-confirmed"}
                            id="zip"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            placeholder="Create password"
                            className={props.errors.password ? "create-login" : "create-login-confirmed"}
                            id="password"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.confirmPassword}
                            placeholder="Confirm password"
                            className={props.errors.confirmPassword ? "create-login" : "create-login-confirmed"}
                            id="confirmPassword"
                        />
                       
                        <button className="buttonh1" type="submit">Create account</button>
                    </form>
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}