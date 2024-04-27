import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.css';
import LandingPage from './screens/landingPage/LandingPage';
import CarListingPage from './screens/carListingPage/CarListingPage';

function App() {
   return (
      <div className={style["container"]}>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<LandingPage />} />
               <Route path='/car-listing-page' element={<CarListingPage />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
