import * as THREE from 'three'
import globalMaterials from "../globalMaterials"

export default function DNASpiral({ radius = 0.025, lenght = 2, count = 200 }) {

    const dnaCylinder = new THREE.CylinderGeometry(radius, radius, lenght)
    const littlePhere = new THREE.SphereGeometry(radius * 2)

    return (
        <>
            {
                Array.from({ length: count }).map((_, index) => {
                    return (
                        <group
                            key={index}
                            position={[0, index * radius * 2 + radius, 0]}
                            rotation={[Math.PI * 0.5, 0, index * 0.05]}
                        >
                            <mesh
                                geometry={dnaCylinder}
                                material={globalMaterials.blackMetallicMat}
                                castShadow
                                receiveShadow
                            />

                            <mesh
                                position={[0, -lenght * 0.5, 0]}
                                geometry={littlePhere}
                                material={globalMaterials.littleSphereMat}
                                castShadow
                                receiveShadow
                            />

                            <mesh
                                position={[0, lenght * 0.5, 0]}
                                geometry={littlePhere}
                                material={globalMaterials.littleSphereMatRed}
                                castShadow
                                receiveShadow
                            />
                        </group>
                    )
                })
            }
        </>
    )
}