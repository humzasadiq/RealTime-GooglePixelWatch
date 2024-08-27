import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import WatchFace3D from './WatchFace3D'
import './GLBModel.css'

export function GLBModel(props) {
  const { nodes, materials } = useGLTF('/luna.glb')
  const sc1 = 1.92*1.15;
  const sc2 = 87.04;

  const screenRef = useRef();
  

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Occluder.geometry}
        material={materials.Tranparent}
        position={[0, 0, -0.001]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={sc2}
      />
      <group scale={0.34} ref={screenRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Band_v04.geometry}
          material={materials.Band_Porcelain}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.blocker_v04001.geometry}
          material={materials.blocker}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown.geometry}
          material={materials.crown_porcelain}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EnclosureButton_v04001.geometry}
          material={materials.EnclosureButton_Porcelain}
          position={[0, 0, 0.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass001.geometry}
          material={materials['mtl_glass1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pins.geometry}
          material={materials['mtl_pins1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Post001.geometry}
          material={materials['mtl_post1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RearBlackFrame001.geometry}
          material={materials['mtl_frameRear1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RearChromCover.geometry}
          material={materials['mtl_faceRear1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RearGlass.geometry}
          material={materials['mtl_rearglass.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SensorBacking001.geometry}
          material={materials['mtl_SensorBacking1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SensorsGreen.geometry}
          material={materials['mtl_SensorsGreen1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SensorsWhite001.geometry}
          material={materials['mtl_SensorsWhite1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        />
      </group>
      <group scale={0.34}>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen001.geometry}
          material={materials['mtl_glass1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        >
        <Html position={[0, 0, 1.35]} transform occlude={[screenRef]} distanceFactor={0} depthTest={false}>
            <div className='luna'>
                <WatchFace3D isAnimating={props.isAnimating}/>
            </div>
        </Html>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/luna.glb')
