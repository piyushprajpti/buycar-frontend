import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.css';
import LandingPage from './screens/landing-page/LandingPage';
import CarListingPage from './screens/car-listing-page/CarListingPage';
import ContactUsPage from './screens/contact-us-page/ContactUsPage';
import Footer from './components/footer/Footer';
import AboutUsPage from './screens/about-us-page/AboutUsPage';

function App() {
   return (
      <div className={style["container"]}>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<LandingPage />} />
               <Route path='/car-listing-page' element={<CarListingPage />} />
               <Route path='/contact-us' element={<ContactUsPage />} />
               <Route path='/about-us' element={<AboutUsPage />} />
            </Routes>
         </BrowserRouter>

         <Footer />
      </div>
   );
}

export default App;
