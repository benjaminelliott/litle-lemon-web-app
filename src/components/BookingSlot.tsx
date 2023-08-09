import { useRef, useEffect } from 'react'
import { useField, useFormikContext } from "formik";

interface Props {
    selected: {
        style: string
    }
}

export const BookingSlot = ({...props}) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props.name);
    const selectedList = document.querySelectorAll(".booking-slot")

    selectedList.forEach(selected => {
        selected.addEventListener('click', () => {
            document.querySelector('.field-booking-confirmed')?.classList.remove('field-booking-confirmed')
            selected.classList.add('field-booking-confirmed');
        })
    })

    return (
        <>
            {props.booked
                ?   ""
                :   <button

                        id="time"
                        name="time"
                        type="button"
                        className="booking-slot"
                        onClick={(e) => {
                            props.toggleShowUser();
                            setFieldValue(field.name, props.time);
                            setFieldValue(field.value, props.time);
                            console.log(field, props.values)
                            e.preventDefault();
                        }}
                    >
                        <span>{props.time}</span>
                    </button>
            }
        </>
    )
};