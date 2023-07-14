import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import { VStack, Container} from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingPageForm from "./BookingPageForm"
import { DatePickerField } from "./BookingPageFormDatePicker";
import BookingSlot from "./BookingSlot";

interface Props {
    availableTimes: Array<any>;
    availableTimesList: Array<any>;
    setAllTimes: React.Dispatch<React.SetStateAction<object>>
}

const BookingPage:React.FC<Props> = (availableTimes, availableTimesList) => {

    return (
        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <VStack>
                <BookingPageForm availableTimes={availableTimesList}/>
            </VStack>
        </Container>
    )
}

export default BookingPage;