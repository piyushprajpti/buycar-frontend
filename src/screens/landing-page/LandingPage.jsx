import React from 'react'
import style from "./landingPage.module.scss"
import Header from '../../components/header/Header'
import HeroSection from './components/hero-section/HeroSection'
import Footer from '../../components/footer/Footer'
import TradeCarSection from './components/trade-car-section/TradeCarSection'
import ScrollableListSection from './components/scrollable-list-section/ScrollableListSection'
import QuickSearchSection from './components/quick-search-section/QuickSearchSection'

export default function LandingPage() {
   return (
      <>
         <div className={style["container"]}>

            <Header />

            <HeroSection />

            <TradeCarSection />

            <QuickSearchSection />

            <ScrollableListSection
               backColor={"var(--footer-back)"}
               word1={{ text: "TRENDING", color: "var(--primary-color)" }}
               word2={{ text: "CARS", color: "#ffffff" }}
            />

            <ScrollableListSection
               backColor={"#ffffff"}
               word1={{ text: "BEST", color: "#000000" }}
               word2={{ text: "DISCOUNTED ", color: "var(--primary-color)" }}
               word3={{ text: "CARS", color: "#000000" }}
            />

            <ScrollableListSection
               backColor={"var(--newest-model-back)"}
               word1={{ text: "NEWEST", color: "var(--primary-color)" }}
               word2={{ text: "MODELS", color: "#000000" }}
            />
            
            <ScrollableListSection
               backColor={"#ffffff"}
               word1={{ text: "NEWEST", color: "#000000" }}
               word2={{ text: "STOCK", color: "var(--primary-color)" }}
            />

         </div>
      </>
   )
}
