import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from './components/Layout';
import { BookingPage } from './components/BookingPage';
import { MenuPage } from './components/MenuPage';
import { HomePage } from 'components/HomePage';
import { AboutPage } from 'components/AboutPage';
import { useReducer } from 'react';
import { ShoppingCartProvider } from 'context/ShoppingCartContext';
import { ShoppingCart } from 'components/ShoppingCart';

const initialState = {
  times: [
      {
          id: 0,
          time: "17:00"
      },
      {
          id: 1,
          time: "18:00"
      },
      {
          id: 2,
          time: "19:00"
      },
      {
          id: 3,
          time: "20:00"
      },
      {
          id: 4,
          time: "21:00"
      },
      {
          id: 5,
          time: "22:00"
      }
  ],
  occasions: [
      {
          id: 0,
          occasion: "Birthday",
      },
      {
          id: 1,
          occasion: "Anniversary",
      },
      {
          id: 2,
          occasion: "Other",
      },
  ],
  guests: [
      {
          min: 1,
          max: 10
      }
  ],
  show: {
      times: false,
      user: false,
      submit: false,
      confirm: false
  }
};

const ACTION = {
  SHOW_TIMES: "SHOW-TIMES",
  SHOW_USER: "SHOW-USER",
  MAKE_BOOKING: "MAKE-BOOKING"
}

const contacts = [
    {
        key: 0,
        name: "Address",
        data: "220 N Green St, Chicago, IL 60607",
        link: "https://goo.gl/maps/7342AWtiy6izLun77"
    },
    {
        key: 1,
        name: "Phone",
        data: "(312) 555-5555",
        link: "tel:312-983-7100"
    },
    {
        key: 3,
        name: "Email",
        data: "contact@littlelemon.biz",
        link: "mailto:contact@littlelemon.biz"
    }
]

const socials = [
    {
        key: 0,
        name: "facebook",
        icon: "icons/facebook.svg",
        link: "www.facebook.com"
    },
    {
        key: 1,
        name: "instagram",
        icon: "icons/instagram.svg",
        link: "www.instagram.com"
    },
    {
        key: 2,
        name: "twitter",
        icon: "icons/twitter.svg",
        link: "www.twitter.com"
    }
]

const zips = [60607, 60608, 60616, 60605, 60604, 60603, 60602, 60601, 60611, 60661, 60654, 60610, 60642, 60622, 60612]


const reducer = (state: any, action: any) => {
  switch (action.type) {
      case "SHOW-TIMES":
          return {
              ...state,
              show: {
                  times: true
              }
          }
      case "SHOW-USER":
          return {
              ...state,
              show: {
                  times: true,
                  user: true
              },
              bookings: {
                  time: state.time
              }
          }
      case "SHOW-SUBMIT":
          return {
              ...state,
              show: {
                  times: true,
                  user: true,
                  submit: true
              }
          }
      case "MAKE-BOOKING":
          return {
              ...state,
              times: [
                  { booked: true }
              ],
              show: {
                  times: false,
                  user: false,
                  submit: false,
                  confirm: true
              },
              confirmedBookings: [
                  {
                      id: action.payload.firstName + action.payload.guests,
                      firstName: action.payload.firstName,
                      lastName: action.payload.lastName,
                      email: action.payload.email,
                      occasion: action.payload.occasion,
                      guests: action.payload.guests,
                      date: action.payload.date,
                      time: action.payload.time
                  }
              ]
          }
      case "ANOTHER-BOOKING":
          return {
              ...state,
              show: {
                  times: false,
                  user: false,
                  submit: false,
                  confirm: false
              }
          }
      default:
          throw new Error('Unknown action.');
  }
}

const App = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleComplete = (values: any) => {
      dispatch({
          type: "MAKE-BOOKING",
          payload: {
              id: values.id,
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              occasion: values.occasion,
              guests: values.guests,
              date: values.date,
              time: values.time
          }
      });
  }

  const toggleShowTimes = () => {
      dispatch({ type: "SHOW-TIMES" });
  }

  const toggleShowUser = () => {
      dispatch({ type: "SHOW-USER" })
  }

  const toggleShowSubmit = () => {
      dispatch({ type: "SHOW-SUBMIT" })
  }

  const handleAnotherBooking = () => {
      dispatch({ type: "ANOTHER-BOOKING"})

  }

  return (
    <ChakraProvider>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Layout contacts={contacts} socials={socials} zips={zips}/>}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="reservations" element={<BookingPage
                confirmedBookings={state.confirmedBookings}
                occasions={state.occasions}
                guests={state.guests}
                availableTimes={state.times}
                show={state.show}
                toggleShowTimes={toggleShowTimes}
                toggleShowUser={toggleShowUser}
                toggleShowSubmit={toggleShowSubmit}
                handleComplete={handleComplete}
                handleAnotherBooking={handleAnotherBooking}
                ACTION={ACTION}
                />
              }
            />
            <Route path="cart" element={<ShoppingCart contacts={contacts} zips={zips}/>} />
          </Route>
        </Routes>
      </ShoppingCartProvider>
    </ChakraProvider>
  );
}

export default App;