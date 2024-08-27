import React, {Suspense} from "react";
import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLBModel } from "./GLBModel";

const WatchModel = ( {isAnimating} ) => {
    return ( 
        <Canvas >
            <Environment preset="studio"/>
            <OrbitControls enableZoom={false}/>   
            <Suspense>
                <GLBModel isAnimating={isAnimating} scale={1.3}/>
            </Suspense>
        </Canvas>
     );
}

export default WatchModel;