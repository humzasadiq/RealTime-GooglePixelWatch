import React from 'react';
import {Canvas} from '@react-three/fiber';
import WatchModelLower from "./WatchModelLower";

const WatchModel = ({ isAnimating }) => {
    return ( 
        <Canvas shadows={false} id='watch-canvas'>
            <WatchModelLower isAnimating={isAnimating}/>
        </Canvas>
    );
};

export default React.memo(WatchModel);
