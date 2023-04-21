import React, { useEffect, useRef, useState } from "react";
import { DoubleSide } from 'three';
import { TextureLoader } from 'three';
import { useLoader } from "@react-three/fiber";
import first from "./imagenes/1.jpg"
import  second from "./imagenes/2.jpg"
//import { useVideoTexture } from "@react-three/drei";

export default function Image() {
    const wallRef = useRef(null);
    const firstTexture = useLoader(TextureLoader, first)
    const secondTexture = useLoader(TextureLoader, second)
    const [textura,setTextura] = useState(firstTexture)
    const [change,setChange] = useState(false)
    useEffect(()=>{
        if(change){
            setTextura(firstTexture)
        }else{
            setTextura(secondTexture)
        }
    },[change])

    const onHandleVideo = (event) => {
        console.log(change)
        setChange(!change)
    }
    
    return (
        <mesh position-y={6}position-z={-14.9} scale = {10} dispose={null} onPointerEnter={onHandleVideo} > 
                <planeGeometry args={[1.18, 0.8]} />
                <meshBasicMaterial map={textura} side={DoubleSide} toneMapped={false}/> 
                 
        </mesh>
        
    );
}