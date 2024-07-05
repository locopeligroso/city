import Arc from "./Arc"
import { Sparkles } from "@react-three/drei"
import { Physics } from '@react-three/rapier'


import globalMaterials from "../globalMaterials"
import Zumbimbi from "./Zumbimbi"
import Floor from "../Floor"


export default function CentralPlaza({ position, rotation, buildingSequence }) {

    return <>
        <group position={position} rotation ={rotation}>

            <Sparkles position={[0, 10, 0]} scale={20} size={5} noise={10} />

            <Arc position={[0, 0, 0]} buildingSequence={buildingSequence} />

            <Zumbimbi></Zumbimbi>

            {/* FLOOR */}
            <Floor material={globalMaterials.floorMat}/>

        </group>

    </>
}