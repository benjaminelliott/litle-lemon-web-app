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

export const LoginBar = (props: any) => {

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
                    {
                        props.token
                        ? "Login"
                        : "Welcome"
                    }
                    </DrawerHeader>
                <DrawerBody className='login'>
                    <input className="input-login" placeholder="Username" />
                    <input className="input-login" placeholder="Email address" />
                    <button onClick={props.onClose}>Cancel</button>
                    <button className="buttonh1" onClick={props.setToken}>Login</button>
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}