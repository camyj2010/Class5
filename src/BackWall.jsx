import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function BackWall() {
    const PATH = "/static/textures/wall/"
    const props = useTexture({
        map: PATH + 'color.jpg',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'occ.jpg',
        innerHeight:PATH+'height.png',
        
    })
    return (
        <mesh position-y={6}position-z={15} receiveShadow>
            <planeGeometry args={[20, 15]} />
            <meshStandardMaterial {...props} side={DoubleSide}/>
        </mesh>
    )
}