import { useField, useFormikContext } from "formik";

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
                            e.preventDefault();
                            props.toggleShowUser();
                            setFieldValue(field.name, props.time);
                        }}
                    >
                        <span>{props.time}</span>
                    </button>
            }
        </>
    )
};