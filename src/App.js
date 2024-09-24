import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import img1 from "./assets/cardimage/Group 1000002466.png"
import img2 from "./assets/cardimage/Group 1000002766.png"
import img3 from "./assets/cardimage/Group 1000002767.png"
import img4 from "./assets/cardimage/Group 1000002771.png"
import img5 from "./assets/cardimage/Group 1000002772.png"
import img6 from "./assets/cardimage/Group 1000002773.png"
import ChallengeForm from './components/ChallengeForm';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreviewChallenge from './components/PreviewChallenge';



export const EventContext = createContext()
function App() {
  const [events , setEvents]  = useState ( [
    { imageUrl: img1, status: 'Upcoming', title: 'Data Science Bootcamp - Graded Datathon', date: 'Starts in: 00 Days : 15 Hours : 22 Minutes', buttonText: 'Participate Now', level:"easy", des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img2, status: 'Upcoming', title: 'Data Sprint 72 - Butterfly Identification', date: 'Starts in: 00 Days : 12 Hours : 34 Minutes', buttonText: 'Participate Now', level:"easy" ,des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img3, status: 'Active', title: 'Data Sprint 71 - Weather Recognition', date: 'Ends in: 01 Days : 17 Hours : 10 Minutes', buttonText: 'Participate Now', level:"easy" ,des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img4, status: 'Active', title: 'Data Sprint 70 - Airline Passenger Satisfaction', date: 'Ends in: 00 Days : 11 Hours : 27 Minutes', buttonText: 'Participate Now', level:"easy",des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy." },
    { imageUrl: img5, status: 'Past', title: 'Engineering Graduates Employment Outcomes', date: 'Ended on 16th May 22 09:00 PM', buttonText: 'View Results',level:"easy" ,des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img6, status: 'Past', title: 'Travel Insurance Claim Prediction', date: 'Ended on 16th May 22 09:00 PM', buttonText: 'View Results',level:"easy",des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy." }
  ])
  return (
    <EventContext.Provider value={{events ,setEvents}}>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-challenge" element={<ChallengeForm />} />
          <Route path="/preview" element={<PreviewChallenge />} />
        </Routes>
      </Router>
    
    </EventContext.Provider>
  );
}

export default App ;
