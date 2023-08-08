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
            document.querySelector('.selected')?.classList.remove('selected')
            selected.classList.add('selected');
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
                        onClick={() => {
                            props.toggleShowUser();
                            setFieldValue(field.name, props.time);
                            setFieldValue(field.value, props.time);
                        }}
                    >
                        <span>{props.time}</span>
                    </button>
            }
        </>
    )
};