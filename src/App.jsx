import { useState, useRef, useEffect } from 'react';
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
  const [is3D, setIs3D] = useState(false);
  const classNames = ['googlewatch1', 'googlewatch2', 'googlewatch3', 'googlewatch4'];
  const [watchColor, setWatchColor] = useState('#98C0FF');
  const currentClassIndex = useRef(0);

  const visibleRef = useRef(null);

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

  useEffect(() => {
    if (is3D) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            setIs3D(false);
          }
        },
        {
          root: null,
          threshold: 0.2,
        }
      );

      if (visibleRef.current) {
        observer.observe(visibleRef.current);
      }

      return () => {
        if (visibleRef.current) {
          observer.unobserve(visibleRef.current);
        }
      };
    }
  }, [is3D]);

  return (
    <>
      <Header onTriggerAnimation={handleTriggerAnimation} setWatchColor={setWatchColor}/>
      <Tooltip />
      <div className='headline'>
        <h1>
          <a href="#SmartWatches" className='a1'>Smartwatches</a> and <a href="#Trackers" className='a2'>trackers</a> to keep you moving.
        </h1>
      </div>
      <div className='model-container'>
        <div className='model' ref={visibleRef}>
          {is3D ? <WatchModel isAnimating={isAnimating} watchColor={watchColor} /> : <img className='Front' src='/assets/Front2D.png'/>}
        </div>
        <div className='icon-container'>
          <div className="threeD-icon" onClick={threeDHandle}>
          {is3D ? (
            <div className='untry-div'><TbCube3dSphere /></div>
          ) : (
            <div className='try-div'>
              <TbCube3dSphereOff /> <p className='try-text'>Explore in 3D</p>
            </div>
          )}
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
