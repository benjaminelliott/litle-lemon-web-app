import menuItems from "../data/items.json"
import { CartItem } from "./CartItem"
import { useId } from "react"

type CartItemProps = {
    id: number
    course: number
}

export const CartSection = ({ id }: CartItemProps) => {

    const Id = useId()

    return (
        <>
            {
                menuItems.map((course: any) => {
                    return (
                        <CartItem key={course.id + Id} course={course} id={id} />
                    )
                })
            }
        </>
    )
}