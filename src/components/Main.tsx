import { ReactElement, useState } from 'react'
import { Container }  from '@chakra-ui/react'
import HomePage from './HomePage'
import BookingPage from './BookingPage';
import BookingPageForm from './BookingPageForm';

const Main:React.FC = () => {

    const [allTimes, setAllTimes] = useState<Array<Object>>([
        {
            time: "17:00",
        },
        {
            time: "18:00",
        },
        {
            time: "19:00",
        },
        {
            time: "20:00",
        },
        {
            time: "21:00",
        },
        {
            time: "22:00",
        }
    ]);

    const availableTimesList = allTimes.map((t) => {
        
        return (
            <option key={t.time} >
                {t}
            </option>
        )
    }
);

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage availableTimesList={availableTimesList}/>
        </Container>
    );
}

export default Main;