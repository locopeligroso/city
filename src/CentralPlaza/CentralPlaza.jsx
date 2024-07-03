import globalMaterials from "../globalMaterials"
import DNASpiral from "./DNASpiral"
import Arc from "./Arc"


export default function CentralPlaza() {

    return <>

        <DNASpiral />

        <Arc />

        <mesh
            rotation={[-Math.PI * 0.5, 0, 0]}
            position={[0, 0, 0]}
            material={globalMaterials.floorMat}
            castShadow
            receiveShadow
        >
            <planeGeometry args={[10, 10]} />
        </mesh>

    </>
}