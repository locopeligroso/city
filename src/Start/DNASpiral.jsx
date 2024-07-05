import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import globalMaterials from "../globalMaterials"




export default function DNASpiral({ 
    position,
    rotation,

    radius = 0.025, // è il raggio dei cilindri e delle sfere alle estremità
    length = 5, // è la lunghezza dei cilindri
    count = 100, // è il numeri dei cilindri che saranno visualizzati
    spiralControl = 0.1, // controlla qaunte volte si contorce la spirale
    baseRadius = 1 // raggio della base circolare
}) {

    const dnaRefs = useRef([])

    /**
     * GEOMETRIE
     */
    // Singolo rubo orizzontale
    const dnaCylinder = useMemo(() => new THREE.CylinderGeometry(radius, radius, length), [radius, length])

    // Sfera posta all'estremità del cilindro
    const littleSphere = useMemo(() => new THREE.IcosahedronGeometry(radius * 2), [radius])


    /**
     * Animazione della rotaazioni
     */
    useFrame((state, delta) => {
        dnaRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.rotation.z += delta * 2
            }
        })
    })

    return (
        <>
            <group position={position} rotation={rotation}>

                {
                    /**
                     *  Array che dispone i cilindri uno sopra l'altro e ne controlla la rotazione
                     */

                    Array.from({ length: count }).map((_, index) => {
                        return (
                            <group
                                ref={el => dnaRefs.current[index] = el}
                                key={index}
                                position={[0, index * radius * 4 + radius, 0]}
                                rotation={[Math.PI * 0.5, 0, index * spiralControl]}
                                scale={[1, (index / count), 1]}
                            >
                                <mesh
                                    geometry={dnaCylinder}
                                    material={globalMaterials.metallic.black}
                                    castShadow
                                    receiveShadow
                                />
                                <mesh
                                    scale={[1, (count / index), 1]}
                                    position={[0, -length * 0.5, 0]}
                                    geometry={littleSphere}
                                    material={globalMaterials.emissiveBlueMat}
                                    castShadow
                                    receiveShadow
                                />
                                <mesh
                                    scale={[1, (count / index), 1]}
                                    position={[0, length * 0.5, 0]}
                                    geometry={littleSphere}
                                    material={globalMaterials.emissiveRedMat}
                                    castShadow
                                    receiveShadow
                                />
                            </group>

                        )
                    })
                }

                {/* BASE CIRCOLARE */}
                <mesh
                    material={globalMaterials.metallic.blue}
                >
                    <cylinderGeometry args={[baseRadius,baseRadius,0.3]}/>
                </mesh>

            </group>
        </>
    )
}


