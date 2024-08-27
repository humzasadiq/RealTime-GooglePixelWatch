import { useEffect, useState, useRef } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import Products1 from './components/Products1.jsx'
import TermsAndConditions from './components/TAC.jsx'
import Tooltip from './components/Tooltip.jsx'
import WatchModel from './components/WatchModel.jsx'

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const classNames = ['googlewatch1', 'googlewatch2', 'googlewatch3', 'googlewatch4'];
  const currentClassIndex = useRef(0);

  const ColorScheme = () => {
    document.body.classList.remove(classNames[currentClassIndex.current]);
    currentClassIndex.current = (currentClassIndex.current + 1) % classNames.length;
    document.body.classList.add(classNames[currentClassIndex.current]);
  };

  const handleTriggerAnimation = () => {
    ColorScheme();
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <>
      <Header onTriggerAnimation={handleTriggerAnimation} />
      <Tooltip/>
      <div className='headline'>
        <h1><a href="#SmartWatches" className='a1'>Smartwatches</a> and <a href="#Trackers" className='a2'>trackers</a> to keep you moving.</h1>
      </div>
      <div className='model'>
        <WatchModel isAnimating={isAnimating}/>
      </div>
      <Products isAnimating={isAnimating}  />
      <Products1 id='Trackers'/>
      <TermsAndConditions/>
    </>
  )
}

export default App
