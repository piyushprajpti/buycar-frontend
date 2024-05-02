import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.css';
import LandingPage from './screens/landing-page/LandingPage';
import CarListingPage from './screens/car-listing-page/CarListingPage';
import ContactUsPage from './screens/contact-us-page/ContactUsPage';
import Footer from './components/footer/Footer';
import AboutUsPage from './screens/about-us-page/AboutUsPage';
import TandCPage from './screens/t-and-c-page/TandCPage';
import FAQPage from './screens/faq-page/FAQPage';
import CarDetailPage from './screens/car-detail-page/CarDetailPage';

function App() {
   return (
      <div className={style["container"]}>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<LandingPage />} />
               <Route path='/car-listing' element={<CarListingPage />} />
               <Route path='/contact-us' element={<ContactUsPage />} />
               <Route path='/about-us' element={<AboutUsPage />} />
               <Route path='/terms-and-conditions' element={<TandCPage />} />
               <Route path='/faqs' element={<FAQPage />} />
               <Route path='/car-detail' element={<CarDetailPage />} />
            </Routes>
            <Footer />
         </BrowserRouter>

      </div>
   );
}

export default App;
