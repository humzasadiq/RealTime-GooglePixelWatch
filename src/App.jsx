import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import TermsAndConditions from './components/TAC.jsx'

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTriggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Match the duration of the animation
  };

  return (
    <>
      <Header onTriggerAnimation={handleTriggerAnimation} />
      <div className='headline'>
        <h1><a href="#SmartWatches" className='a1'>Smartwatches</a> and <a href="#" className='a2'>trackers</a> to keep you moving.</h1>
      </div>
      <Products isAnimating={isAnimating} product_type={"Trackers"}/>
      <Products isAnimating={isAnimating} product_type={"SmartWatches"}/>
      <TermsAndConditions/>
    </>
  )
}

export default App
