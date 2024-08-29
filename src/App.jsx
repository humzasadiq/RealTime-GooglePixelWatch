import { useState, useRef } from 'react';
import './App.css';

import { TbCube3dSphere, TbCube3dSphereOff } from "react-icons/tb";

import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import Products1 from './components/Products1.jsx';
import TermsAndConditions from './components/TAC.jsx';
import Tooltip from './components/Tooltip.jsx';
import WatchModel from './components/WatchModel.jsx';
import Accordian from './components/Accordian.jsx';

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [is3D, setIs3D] = useState(true);
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

  const threeDHandle = () => {
    setIs3D(prevState => !prevState);
  };

  return (
    <>
      <Header onTriggerAnimation={handleTriggerAnimation} />
      <Tooltip />
      <div className='headline'>
        <h1>
          <a href="#SmartWatches" className='a1'>Smartwatches</a> and <a href="#Trackers" className='a2'>trackers</a> to keep you moving.
        </h1>
      </div>
      <div className='model-container'>
        <div className='model'>
          {is3D ? <WatchModel isAnimating={isAnimating} /> : <img className='Front' src='/assets/Front2D.png'/>}
        </div>
        <div className='icon-container'>
          <div className="threeD-icon" onClick={threeDHandle}>
            {is3D ? <TbCube3dSphere /> : <TbCube3dSphereOff />}
          </div>
        </div>
      </div>
      <Products isAnimating={isAnimating} />
      <Accordian />
      <Products1 id='Trackers' />
      <TermsAndConditions />
    </>
  );
}

export default App;
