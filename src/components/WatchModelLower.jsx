import React, {Suspense, useRef, useMemo, useState} from "react";
import {useFrame} from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLBModel } from "./GLBModel";
// import SimplifyModel from "./SimplifyModel";

function WatchModelLower({isAnimating}) {
    const modelRef = useRef();
    const [animationComplete, setAnimationComplete] = useState(false);

    const targetPosition = useMemo(() => [0, 0, 0], []);
    const targetRotation = useMemo(() => [0, 0, 0], []);

    useFrame((state, delta) => {
        if (modelRef.current) {
            if (!animationComplete) {
                modelRef.current.position.lerp({ x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] }, delta * 1);

                modelRef.current.rotation.x += (targetRotation[0] - modelRef.current.rotation.x) * delta * 0.5;
                modelRef.current.rotation.y += (targetRotation[1] - modelRef.current.rotation.y) * delta * 0.5;
                modelRef.current.rotation.z += (targetRotation[2] - modelRef.current.rotation.z) * delta * 0.5;

                const posReached = Math.abs(modelRef.current.position.x - targetPosition[0]) < 0.001 &&
                                   Math.abs(modelRef.current.position.y - targetPosition[1]) < 0.001 &&
                                   Math.abs(modelRef.current.position.z - targetPosition[2]) < 0.001;

                const rotReached = Math.abs(modelRef.current.rotation.x - targetRotation[0]) < 0.001 &&
                                   Math.abs(modelRef.current.rotation.y - targetRotation[1]) < 0.001 &&
                                   Math.abs(modelRef.current.rotation.z - targetRotation[2]) < 0.001;

                if (posReached) {
                    setAnimationComplete(true);
                }
            } else {
                modelRef.current.rotation.y -= 0.002;
            }
        }
    });

    const isMobile = window.innerWidth < 768;

    return ( 
        <>
            <Environment preset="studio"/>
            {!isMobile && <OrbitControls enableZoom={false} />}
            <Suspense fallback={null}>
                <GLBModel modelRef={modelRef} isAnimating={isAnimating} scale={1}/>
                {/* <SimplifyModel modelRef={modelRef} factor={0.6} /> */}
            </Suspense>
        </>
    );
}

export default React.memo(WatchModelLower);
