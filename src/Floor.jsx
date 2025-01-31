
import { RigidBody } from "@react-three/rapier"

export default function Floor({ material }) {

    return <RigidBody type="fixed">
        <mesh
            rotation={[0, 0, 0]}
            position={[0, -0.25, 0]}
            material={material}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[13, 0.5, 13]} />
        </mesh>
    </RigidBody>

}