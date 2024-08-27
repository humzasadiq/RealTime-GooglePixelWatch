import React, {Suspense} from "react";
import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLBModel } from "./GLBModel";

const WatchModel = ( {isAnimating} ) => {
    return ( 
        <Canvas >
            <Environment preset="studio"/>
            <OrbitControls/>   
            <Suspense>
                <GLBModel isAnimating={isAnimating} scale={1.4}/>
            </Suspense>
        </Canvas>
     );
}

export default WatchModel;