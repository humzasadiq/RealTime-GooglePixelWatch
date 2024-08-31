import React, { useRef, useMemo, useEffect } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import WatchFace3D from './WatchFace3D';
import './GLBModel.css';

export const GLBModel = React.memo((props) => {
  const { nodes, materials } = useGLTF('/compressedluna.glb');
  const sc1 = 1.92 * 1.15;
  const sc2 = 87.04;

  const screenRef = useRef();

  const commonMeshProps = {
    castShadow: false,
    receiveShadow: false,
    scale: sc1,
    position: [0, 0, 0.05],
  };

  useEffect(() => {
    if (materials.Band_Porcelain) {
      materials.Band_Porcelain.color.set(props.watchColor);
    }
  }, [props.watchColor, materials.Band_Porcelain]);

  const meshes = useMemo(() => [
    { geometry: nodes.Band_v04.geometry, material: materials.Band_Porcelain },
    { geometry: nodes.Crown.geometry, material: materials.crown_porcelain },
    { geometry: nodes.EnclosureButton_v04001.geometry, material: materials.EnclosureButton_Porcelain, rotation: [Math.PI / 2, 0, 0] },
    { geometry: nodes.Glass001.geometry, material: materials['mtl_glass1.001'] },
    { geometry: nodes.Pins.geometry, material: materials['mtl_pins1.001'] },
    { geometry: nodes.Post001.geometry, material: materials['mtl_post1.001'] },
    { geometry: nodes.RearBlackFrame001.geometry, material: materials['mtl_frameRear1.001'] },
    { geometry: nodes.RearChromCover.geometry, material: materials['mtl_faceRear1.001'] },
    { geometry: nodes.RearGlass.geometry, material: materials['mtl_rearglass.001'] },
    { geometry: nodes.SensorBacking001.geometry, material: materials['mtl_SensorBacking1.001'] },
  ], [nodes, materials]);

  return (
    <group {...props} dispose={null} ref={props.modelRef} position={[0, 10, 0]} rotation={[-1, 0, -1]}>
      <mesh
        geometry={nodes.Occluder.geometry}
        material={materials.Tranparent}
        position={[0, 0, -0.001]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={sc2}
      />
      <group scale={0.34} ref={screenRef}>
        {meshes.map(({ geometry, material, rotation = [0, 0, 0] }, index) => (
          <mesh key={index} {...commonMeshProps} geometry={geometry} material={material} rotation={rotation} />
        ))}
      </group>
      <group scale={0.34}>
        <mesh
          geometry={nodes.Screen001.geometry}
          material={materials['mtl_glass1.001']}
          position={[0, 0, 0.05]}
          scale={sc1}
        >
          <Html position={[0, 0, 1.35]} transform occlude={[screenRef]} zIndexRange={[1, 0]}>
            <div className='luna'>
              <WatchFace3D isAnimating={props.isAnimating} />
            </div>
          </Html>
        </mesh>
      </group>
    </group>
  );
});

useGLTF.preload('/compressedluna.glb');
