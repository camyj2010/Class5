import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { MeshReflectorMaterial} from '@react-three/drei'
import Floor from './Floor'
import Video from './Video'
import Image from './Image'
import BackWall from './BackWall'
import BackWall2 from './BackWall2'
import useRef from 'react'
import { useTexture } from "@react-three/drei";
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper,HemisphereLightHelper,PointLightHelper, RectAreaLight ,SpotLightHelper } from 'three';


export default function Experience() {
   
    

    
    
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <spotLight position={[ 0,-0.9,-2.7]} intensity={1.0} castShadow angle={Math.PI/9} decay={0.01} />
        <spotLight position={[ 0,-0.9,2.7]} intensity={1.0} castShadow angle={Math.PI/9} decay={0.01} />

        <ambientLight intensity={0.5}castShadow />
        <Video/>
        <Floor/>
        <BackWall/>
        <Image/>
        <BackWall2/>
        
    </>
}