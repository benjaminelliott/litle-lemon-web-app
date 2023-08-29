import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from './components/Layout';
import { BookingPage } from './components/BookingPage';
import { MenuPage } from './components/MenuPage';
import { HomePage } from 'components/HomePage';
import { AboutPage } from 'components/AboutPage';
import { OrderPage } from 'components/OrderPage';
import { createContext, useReducer, useState } from 'react';
import { ShoppingCartProvider } from 'context/ShoppingCartContext';

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
  },
  menu: [
    {
        key: 0,
        name: "Appetizers",
        items: [
            {
                key: 0,
                name: "Melitzanosalata",
                price: 6,
                veggie: false,
                vegan: true,
                amount: 1
            },
            {
                key: 1,
                name: "Arakas",
                price: 5,
                veggie: false,
                vegan: true,
                amount: 1
            },
            {
                key: 2,
                name: "Patzaria",
                price: 6,
                veggie: false,
                vegan: true,
                amount: 1
            },
            {
                key: 3,
                name: "Fava",
                price: 5,
                veggie: false,
                vegan: true,
                amount: 1
            },
            {
                key: 4,
                name: "Taramosalata",
                price: 6,
                veggie: false,
                vegan: false,
                amount: 1
            },
            {
                key: 5,
                name: "Dolmades",
                price: 5,
                veggie: true,
                vegan: true,
                amount: 1
            },
            {
                key: 6,
                name: "Tirokafteri",
                price: 6,
                veggie: false,
                vegan: false,
                amount: 1
            },
            {
                key: 7,
                name: "Hummus",
                price: 5,
                veggie: false,
                vegan: true,
                amount: 1
            },
            {
                key: 8,
                name: "Bruschetta",
                price: 6,
                veggie: true,
                vegan: false,
                amount: 1
            }
        ]
    },
    {
        key: 1,
        name: "Entrees",
        items: [
            {
                key: 10,
                name: "Vegetarian Mousaka",
                price: 17,
                veggie: true,
                vegan: false,
                amount: 1
            },
            {
                key: 11,
                name: "Imambaildi",
                price: 17,
                veggie: false,
                vegan: false,
                amount: 1
            },
            {
                key: 12,
                name: "Calamari Platter",
                price: 16,
                veggie: false,
                vegan: false,
                amount: 1
            },
            {
                key: 13,
                name: "Grilled Octopus Platter",
                price: 16,
                veggie: false,
                vegan: false,
                amount: 1
            },
            {
                key: 14,
                name: "Free Range Whole Chicken",
                price: 16,
                veggie: false,
                vegan: false,
                amount: 1
            },
            {
                key: 15,
                name: "Lamb Chops",
                price: 23,
                veggie: false,
                vegan: false,
                amount: 1
            },
            {
                key: 16,
                name: "Papoutsakia",
                price: 17,
                veggie: true,
                vegan: false,
                amount: 1
            },
            {
                key: 17,
                name: "Yemista",
                price: 17,
                veggie: true,
                vegan: false,
                amount: 1
            },
            {
                key: 18,
                name: "Greek Salad",
                price: 13,
                veggie: true,
                vegan: true,
                amount: 1
            },
        ]
    },
    {
        key: 2,
        name: "Desserts",
        items: [
            {
                key: 20,
                name: "Lemon Cake",
                price: 5,
                veggie: true,
                vegan: false,
                amount: 1
            },
            {
                key: 21,
                name: "Galaktoboureko",
                price: 5,
                veggie: true,
                vegan: false,
                amount: 1
            },
            {
                key: 22,
                name: "Rice Pudding",
                price: 5,
                veggie: true,
                vegan: true,
                amount: 1
            },
        ]
    }]
};

const ACTION = {
  SHOW_TIMES: "SHOW-TIMES",
  SHOW_USER: "SHOW-USER",
  MAKE_BOOKING: "MAKE-BOOKING"
}

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

export const UserContext = createContext<any>(null);

const App = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const [ user, setUser ] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            token: '',
        }
    );

    const [basket, setBasket ] = useState([]);

    const [booking, setBooking ] = useState({});

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
    <ShoppingCartProvider>
        <ChakraProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="menu" element={<MenuPage menu={initialState.menu} />} />
                    <Route path="order" element={<OrderPage />} />
                    <Route path="booking" element={<BookingPage
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
                        />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </ChakraProvider>
    </ShoppingCartProvider>
  );
}

export default App;