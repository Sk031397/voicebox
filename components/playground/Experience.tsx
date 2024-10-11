'use client';
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, Float,Gltf, Html, Loader, useGLTF } from "@react-three/drei"
import { Character } from "./Character";
import { Leva, useControls, button } from "leva";
import { degToRad } from "three/src/math/MathUtils.js";
import { Suspense, useEffect, useRef } from "react";
import { BoardSettings } from "./BoardSettings";
import { TypingBox } from "./TypingBox";
export const Experience = () => {
    return (
        <>
            <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
                <TypingBox/>
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