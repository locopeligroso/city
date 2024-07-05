import { useEffect } from "react"
import { Environment, OrbitControls, Sky, BakeShadows } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useControls } from "leva"
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier"

import CentralPlaza from "./CentralPlaza/CentralPlaza"
import globalMaterials from "./globalMaterials"
import globalColors from "./globalColors"
import Start from "./Start/Start"
import Player from "./Player"

export default function Experience() {

    const { envMapIntensity } = useControls('EnvMap Intensity', {

        envMapIntensity: { value: 1, min: 0, max: 5, step: 0.001 }
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

            <Environment preset="sunset" />

            <directionalLight
                intensity={2.5}
                castShadow
                position={[10, 10, -10]}
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
            <Physics debug>

                <Start />
                <CentralPlaza position={[0, 0, 13]} />
              



                <Player />


            </Physics>

        </>
    )
}
