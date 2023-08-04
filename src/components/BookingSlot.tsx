import { useField, useFormikContext } from "formik";

export const BookingSlot = ({...props}) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props.name);
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