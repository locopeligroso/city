import { useGLTF } from "@react-three/drei"

import globalMaterials from "../globalMaterials"


export function BaseArc({ position, rotation }) {
    const { nodes } = useGLTF('./models/BaseArc.gltf')

    return (
        <group scale={0.001} position={position} rotation={rotation}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Arco.geometry}
                material={globalMaterials.floorMat}
                rotation={[Math.PI / 2, 0, 0]}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Arco_interno.geometry}
                material={globalMaterials.littleSphereMatRed}
                rotation={[Math.PI / 2, 0, 0]}

            />
        </group>
    )
}

function HalfBuilding({ position, rotation }) {

    return <>

        <group position={position} rotation={rotation}>

            {
                Array.from({ length: 4 }).map((_, index) => {
                    return <group
                        key={index}
                        position={[0, index * 2.1, 0]}
                    >
                        <BaseArc />
                    </group>
                })
            }

            {
                Array.from({ length: 3 }).map((_, index) => {
                    return <group
                        key={index}
                        position={[-1.3, index * 2.1, 0]}
                    >
                        <BaseArc />
                    </group>
                })
            }

            {
                Array.from({ length: 2 }).map((_, index) => {
                    return <group
                        key={index}
                        position={[-1.3 * 2, index * 2.1, 0]}
                    >
                        <BaseArc />
                    </group>
                })
            }

            {
                Array.from({ length: 1 }).map((_, index) => {
                    return <group
                        key={index}
                        position={[-1.3 * 3, index * 2.1, 0]}
                    >
                        <BaseArc />
                    </group>
                })
            }

        </group>


    </>
}


export default function Arc({ position=[-5 + 1.3 * 2, 0, 5-1.3 * 2], rotation=[0, Math.PI, 0] }) {

    return <>

        <group position={position} rotation={rotation}>

            <HalfBuilding />

            <HalfBuilding
                position={[1.3 * 3 / 2, 0, 1.3 /2]}
                rotation={[0, Math.PI * 0.5, 0]} />

        </group>
    </>

}