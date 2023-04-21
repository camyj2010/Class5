import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Floor() {
    const PATH = "/static/textures/floor/"
    const props = useTexture({
        map: PATH + 'color.jpg',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'occ.jpg',
        innerHeight:PATH+'height.png',
        
    })
    return (
        <mesh position-y={ - 1.5 } rotation-x={ - Math.PI * 0.5 }receiveShadow>
            <planeGeometry args={[20, 30]} />
            <meshStandardMaterial {...props}/>
        </mesh>
    )
}
