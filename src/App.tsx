import { MotionConfig } from 'framer-motion';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Products from './components/Products';
import BrandStory from './components/BrandStory';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <AppProvider>
      <MotionConfig reducedMotion="never">
        <div className="min-h-screen" style={{ background: '#0B0E1F' }}>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <Collections />
            <Products />
            <BrandStory />
            <Testimonials />
            <Newsletter />
          </main>
          <Footer />
          <CartSidebar />
        </div>
      </MotionConfig>
    </AppProvider>
  );
}

export default App;
