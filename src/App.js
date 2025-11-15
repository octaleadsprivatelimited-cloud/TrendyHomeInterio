import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import DesignIdeas from './pages/DesignIdeas/DesignIdeas';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import ModularKitchen from './pages/ModularKitchen/ModularKitchen';
import Wardrobe from './pages/Wardrobe/Wardrobe';
import Bedroom from './pages/Bedroom/Bedroom';
import LivingRoom from './pages/LivingRoom/LivingRoom';
import Bathroom from './pages/Bathroom/Bathroom';
import SpaceSavingFurniture from './pages/SpaceSavingFurniture/SpaceSavingFurniture';
import HomeOffice from './pages/HomeOffice/HomeOffice';
import CustomerStories from './pages/CustomerStories/CustomerStories';
import BusinessInteriors from './pages/BusinessInteriors/BusinessInteriors';
import DesignGallery from './pages/DesignGallery/DesignGallery';
import Estimate from './pages/Estimate/Estimate';
import { ScrollToTop } from './utils/scrollToTop';
import './App.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/design-ideas" element={<DesignIdeas />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/modular-kitchen" element={<ModularKitchen />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/space-saving-furniture" element={<SpaceSavingFurniture />} />
          <Route path="/home-office" element={<HomeOffice />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/business-interiors" element={<BusinessInteriors />} />
          <Route path="/design-gallery" element={<DesignGallery />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/trendyhomeinterio-luxe" element={<Home />} />
          <Route path="/trendyhomeinterio-decko" element={<Home />} />
          <Route path="/partner" element={<Home />} />
          <Route path="/refer" element={<Home />} />
          <Route path="/careers" element={<Home />} />
          <Route path="/support" element={<Home />} />
          <Route path="/store-locator" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/tech" element={<Home />} />
          <Route path="/trendyhomeinterio-care" element={<Home />} />
          <Route path="/interiors-by-trendyhomeinterio" element={<Home />} />
          <Route path="/design-journal" element={<Home />} />
          <Route path="/design-library" element={<Home />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
