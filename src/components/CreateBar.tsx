import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useLocalStorage } from 'hooks/useLocalStorage'
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
                            className="create-login"
                            id="firstName"
                        />
                        <input
                            type="text"
                            name="lastName"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.lastName}
                            placeholder="Last name"
                            className="create-login"
                            id="lastName"
                        />
                        <input
                            type="text"
                            name="phone"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.phone}
                            placeholder="Enter phone"
                            className="create-login"
                            id="phone"
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            placeholder="Enter email"
                            className="create-login"
                            id="email"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            placeholder="Create password"
                            className="create-login"
                            id="password"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.confirmPasswordpassword}
                            placeholder="Confirm password"
                            className="create-login"
                            id="confirmPassword"
                        />
                        <button className="buttonh1" type="submit" onSubmit={props.handleSubmit}>Create account</button>
                    </form>
                </DrawerBody>
                <DrawerFooter>
                    
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}