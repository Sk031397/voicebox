'use client';

import { useGLTF } from "@react-three/drei";
export const characters = ["Nanami","Naoki"];
type CharacterProps = {
    character:string;
} & Record<string,any>;

export const Character = ({character,...props}:CharacterProps) => {
    const { scene } = useGLTF(`/models/Character_${character}.glb`);
    return (
        <group>
            <primitive object={scene}/>
        </group>
    );
};
characters.forEach((character) => {
    useGLTF.preload(`/models/Character_${character}.glb`);
})