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
                    { localStorage.getItem("password")
                        ? <h1 className='text-section-title'>Login</h1>
                        : <h1 className='text-section-title'>Create account</h1>
                    }

                    { localStorage.getItem("password")
                        ? <p className='text-lead'>Welcome back, {localStorage.getItem("firstName")} {localStorage.getItem("lastName")?.charAt(0)}!</p>
                        : <p className='text-lead'>"Please create"</p>
                    }
                </DrawerHeader>
                <DrawerBody>
                <form
                    className='login'
                    noValidate
                    onSubmit={props.handleSubmit}
                >
                    <div>
                        <input
                        type="email"
                        name="email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                        placeholder="Enter email id / username"
                        className="input-login"
                        id="email"
                        />
                        <p className="error">{props.errors.email && props.touched.email && props.errors.email}</p>
                    </div>
                    <div>
                        <input
                        type="password"
                        name="password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.password}
                        placeholder="Enter password"
                        className="input-login"
                        />
                        <p className="error">
                        {props.errors.password && props.touched.password && props.errors.password}
                        </p>
                    </div>
                    <button className="buttonh1" type="submit">Login</button>
              </form>
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}