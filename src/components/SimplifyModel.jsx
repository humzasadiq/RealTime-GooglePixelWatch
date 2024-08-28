import { useEffect } from 'react';
import { SimplifyModifier } from 'three/examples/jsm/modifiers/SimplifyModifier';
import { useThree } from '@react-three/fiber';

function SimplifyModel({ modelRef, factor }) {
    const { scene } = useThree();

    useEffect(() => {
        if (modelRef.current) {
            const modifier = new SimplifyModifier();
            modelRef.current.traverse((child) => {
                if (child.isMesh) {
                    const simplified = modifier.modify(child.geometry, Math.floor(child.geometry.attributes.position.count * factor));
                    child.geometry = simplified;
                }
            });
        }
    }, [modelRef, factor]);

    return null;
}

export default SimplifyModel;
