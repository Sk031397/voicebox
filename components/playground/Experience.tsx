'use client';
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, Float,Gltf, Html, Loader, useGLTF } from "@react-three/drei"
import { Character } from "./Character";
import { Leva, useControls, button } from "leva";
import { degToRad } from "three/src/math/MathUtils.js";
import { Suspense, useEffect, useRef, useState } from "react";
import { BoardSettings } from "./BoardSettings";
import { TypingBox } from "./TypingBox";
import { elevenlabs } from "@/lib/elevenlabs";
import { Voice } from "elevenlabs/api";
import { useAICharacter } from "@/hooks/useAICharacter";

export default function Experience(){
    const itemPlacement = {
        default: {
          classroom: {
            position: [0.2, -1.7, -2],
          },
          teacher: {
            position: [-1, -1.7, -3],
          },
          board: {
            position: [0.45, 0.382, -6],
          },
        },
        alternative: {
          classroom: {
            position: [0.3, -1.7, -1.5],
            rotation: [0, degToRad(-90), 0],
            scale: 0.4,
          },
          teacher: { position: [-1, -1.7, -3] },
          board: { position: [1.4, 0.84, -8] },
        },
      };
      const teacher = useAICharacter((state) => state.character);
      const classroom = useAICharacter((state) => state.classroom);
    const [voices, setVoices] = useState<Voice[]>([]);
    useEffect(() => {
        // Fetch voices asynchronously and set them in state
        elevenlabs.voices.getAll().then((response) => {
            setVoices(response.voices as Voice[]);
        }).catch(error => console.error("Error fetching voices:", error));
    }, []);
    return (
        <>
            <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
                <TypingBox voices={voices}/>
            </div>
            <Leva hidden/>
            <Loader/>
            <Canvas camera={{
                position:[0,0,0.0001]
            }}>
                <CameraManager/>
                <Environment preset="sunset"/>
                <ambientLight intensity={0.8} color={"pink"}/>
                <Html position={[0.22,0.192,-3]} transform distanceFactor={0.5}>
                    <BoardSettings/>
                </Html>
                <Character 
                    character={"Nanami"}
                    position={[-1,-1.7,-3]}
                    scale={1.5}
                    rotation-y={degToRad(20)}
                    />
                <Suspense fallback={null}>
                    <Gltf src="/models/classroom_default.glb" position={[0.2,-1.7,-2]}/>
                </Suspense>
            </Canvas>
        </>
    )
}
const CAMERA_POSITIONS = {
    default: [0, 6.123233995736766e-21, 0.0001],
    loading: [
      0.00002621880610890309, 0.00000515037441056466, 0.00009636414192870058,
    ],
    speaking: [0, -1.6481333940859815e-7, 0.00009999846226827279],
  };
  
  const CAMERA_ZOOMS = {
    default: 1,
    loading: 1.3,
    speaking: 2.1204819420055387,
  };
  
const CameraManager = () => {
    return (
        <CameraControls
        minZoom={1}
        maxZoom={3}
        polarRotateSpeed={-0.3}
        azimuthRotateSpeed={-0.3}
        mouseButtons={{
            left:1,
            right:2,
            middle:4,
            wheel:16
        }}
        touches={{
            one:32,
            two:512,
            three:1024
        }}
        />
    )
}