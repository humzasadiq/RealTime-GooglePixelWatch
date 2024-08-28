import React from 'react';
import {Canvas} from '@react-three/fiber';
import WatchModelLower from "./WatchModelLower";

const WatchModel = ({ isAnimating }) => {
    return ( 
        <Canvas shadows={false}>
            <WatchModelLower isAnimating={isAnimating}/>
        </Canvas>
    );
};

export default React.memo(WatchModel);
