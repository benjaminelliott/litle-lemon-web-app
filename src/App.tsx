import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from './components/Layout';
import { BookingPage } from './components/BookingPage';
import { MenuPage } from './components/MenuPage';
import { HomePage } from 'components/HomePage';
import { AboutPage } from 'components/AboutPage';
import { OrderPage } from 'components/OrderPage';
import { LoginPage } from 'components/LoginPage';
import { useReducer } from 'react';

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
          id: 0,
          occasion: "Anniversary",
      },
      {
          id: 0,
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
  confirmedBookings: [
  ]
  ,
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
                vegan: true
            },
            {
                key: 1,
                name: "Arakas",
                price: 5,
                veggie: false,
                vegan: true
            },
            {
                key: 2,
                name: "Patzaria",
                price: 6,
                veggie: false,
                vegan: true
            },
            {
                key: 3,
                name: "Fava",
                price: 5,
                veggie: false,
                vegan: true
            },
            {
                key: 4,
                name: "Taramosalata",
                price: 6,
                veggie: false,
                vegan: false
            },
            {
                key: 5,
                name: "Gigantes",
                price: 5,
                veggie: false,
                vegan: true
            },
            {
                key: 6,
                name: "Tirokafteri",
                price: 6,
                veggie: false,
                vegan: false
            },
            {
                key: 7,
                name: "Hummus",
                price: 5,
                veggie: false,
                vegan: true
            },
            {
                key: 8,
                name: "Bruschetta",
                price: 6,
                veggie: true,
                vegan: false
            }
        ]
    },
    {
        key: 1,
        name: "Entrees",
        items: [
            {
                key: 0,
                name: "Vegetarian Mousaka",
                price: 17,
                veggie: true,
                vegan: false
            },
            {
                key: 1,
                name: "Imambaildi",
                price: 17,
                veggie: false,
                vegan: false
            },
            {
                key: 2,
                name: "Calamari Platter",
                price: 16,
                veggie: false,
                vegan: false
            },
            {
                key: 3,
                name: "Grilled Octopus Platter",
                price: 16,
                veggie: false,
                vegan: false
            },
            {
                key: 4,
                name: "Free Range Whole Chicken",
                price: 16,
                veggie: false,
                vegan: false
            },
            {
                key: 5,
                name: "Lamb Chops",
                price: 23,
                veggie: false,
                vegan: false
            },
            {
                key: 6,
                name: "Papoutsakia",
                price: 17,
                veggie: true,
                vegan: false
            },
            {
                key: 7,
                name: "Yemista",
                price: 17,
                veggie: true,
                vegan: false
            },
            {
                key: 8,
                name: "Greek Salad",
                price: 13,
                veggie: true,
                vegan: true
            },
        ]
    },
    {
        key: 2,
        name: "Desserts",
        items: [
            {
                key: 0,
                name: "Lemon Cake",
                price: 5,
                veggie: true,
                vegan: false
            },
            {
                key: 1,
                name: "Galaktoboureko",
                price: 5,
                veggie: true,
                vegan: false
            },
            {
                key: 2,
                name: "Rice Pudding",
                price: 5,
                veggie: true,
                vegan: true
            },
        ]
    }]
};

const ACTION = {
  SHOW_TIMES: "SHOW-TIMES",
  SHOW_USER: "SHOW-USER",
  MAKE_BOOKING: "MAKE-BOOKING"
}

const basket = {
    items: [
    ],
}

const addToBasket = (item: any) => {
    
}

const order = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    items: [
        {}
    ],

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="menu" element={<MenuPage menu={initialState.menu}/>} />
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
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;