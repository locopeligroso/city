import Arc from "./Arc"
import { Sparkles } from "@react-three/drei"
import { Physics } from '@react-three/rapier'


import globalMaterials from "../globalMaterials"
import Zumbimbi from "./Zumbimbi"
import Floor from "../Floor"


export default function CentralPlaza({ position, rotation }) {

    return <>
        <group position={position} rotation ={rotation}>

            <Sparkles position={[0, 10, 0]} scale={20} size={5} noise={10} />

            <Arc position={[0, 0, 0]} buildingSequence={[8, 5, 3, 2, 1]} />

            <Zumbimbi></Zumbimbi>

            {/* FLOOR */}
            <Floor material={globalMaterials.floorMat}/>

        </group>

    </>
}