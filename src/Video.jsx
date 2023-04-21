import React, { useEffect, useRef, useState } from "react";
import src from "./video/video.mp4"
import { DoubleSide } from 'three'
import { useVideoTexture } from '@react-three/drei';
//import { useVideoTexture } from "@react-three/drei";

export default function Video() {
    const wallRef = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false)
    const [props, setProps] = useState({ autoPlay: false,  muted : false})
    const { VideoTexture } = require('three');
    const texture = useVideoTexture(src, props);
    const [start, setStart] = useState(false)

    useEffect(()=>{
        if(isPlaying) {
            texture?.image.play();
            
        }else{
            texture?.image.pause();
        }
    },[isPlaying])
       
    const onHandleVideo = (event) => {
        setIsPlaying(!isPlaying)
    }
    
    return (
        <mesh position-y={6 }position-z={14.9} scale = {9.7} dispose={null} onClick={onHandleVideo} > 
                <planeGeometry args={[1.18, 0.8]} />
                <meshBasicMaterial map={texture} side={DoubleSide} toneMapped={false}/> 
                 
        </mesh>
        
    );
}