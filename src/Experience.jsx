import { Environment, OrbitControls, Sky } from "@react-three/drei"
import { useControls } from "leva"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import CentralPlaza from "./CentralPlaza/CentralPlaza"
import globalMaterials from "./globalMaterials"
import globalColors from "./globalColors"

export default function Experience() {
    const { envMapIntensity } = useControls('environment map', {
        envMapIntensity: { value: 1, min: 0, max: 12 }
    })

    const scene = useThree(state => state.scene)
    useEffect(() => {
        scene.environmentIntensity = envMapIntensity
    }, [envMapIntensity])

    return (
        <>
            {/* SETTING & ENVIRONMENT */}
            <color args={[globalColors.skyblue]} attach="background" />

            <OrbitControls makeDefault />

            <Environment preset="sunset"  />

            <directionalLight
                intensity={4.5}
                castShadow
                position={[4, 4, 4]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={0.5}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            {/* COMPONENTS */}
            <CentralPlaza />
        </>
    )
}
