import { useGLTF } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"

import globalMaterials from "../globalMaterials"

export default function Arc({
    position,
    rotation = [0, Math.PI, 0],

    height = 2.1, // è l' altezza di un BaseArc
    width = 1.3, // è la larghezza di un BaseArc
    depth = 1.3, // è quanto un BaseArc è profondo

    buildingSequence = [8, 5, 3, 2, 1], // la lunghezza dell'array determina quante colonne ci saranno, il valore determina quanti BaseArc ci sono nella colonna

    outerMaterial = globalMaterials.brickMat,
    innerMaterial = globalMaterials.emissiveRedMat

    /**
     * questo componente posiziona incrociando due HalfBuilding
     * 
     * la posizione degli Halfbuilding tra di loro viene determinata automaticamente
     * 
     * la base su cui poggiano viene settatta proceduralmente
     */

}) {

    return <>

        <group position={position} rotation={rotation}>

            <group position={[(buildingSequence.length - 1.3) / width, 0.3, (buildingSequence.length - 1.3 / 2) / -width]}>

                <HalfBuilding
                    position={[0, 0, 0]}
                    innerMaterial={innerMaterial}
                    outerMaterial={outerMaterial}
                    buildingSequence={buildingSequence}
                />

                <HalfBuilding
                    position={[1.3 / 2 + 1.3, 0, 1.23 / 2]}
                    rotation={[0, Math.PI * 0.5, 0]}
                    innerMaterial={innerMaterial}
                    outerMaterial={outerMaterial}
                    buildingSequence={buildingSequence}
                />

            </group>

        </group>

        {/* BASE SOTTOSTANTE */}ù
        <RigidBody type="fixed">

            <mesh
                castShadow
                receiveShadow
                position={[0, 0.15, 0]}
                material={globalMaterials.metallic.black}
            >
                <boxGeometry args={[(buildingSequence.length + 3) * width, 0.3, (buildingSequence.length + 3) * width]} />
            </mesh>
        </RigidBody>

    </>

}

function BaseArc({ position, rotation, innerMaterial, outerMaterial }) {
    const { nodes } = useGLTF('./models/BaseArc.gltf')

    return (


        <group scale={0.001} position={position} rotation={rotation}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Arco.geometry}
                material={outerMaterial}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Arco_interno.geometry}
                material={innerMaterial}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

function HalfBuilding({ position, rotation, innerMaterial, outerMaterial, buildingSequence }) {

    function generatePositions() {
        const positions = []
        const offsetX = 1.3

        buildingSequence.forEach((count, groupIndex) => {
            for (let i = 0; i < count; i++) {
                positions.push({
                    position: [-offsetX * groupIndex, i * 2.1, 0],
                    key: `${groupIndex}-${i}`
                })
            }
        })

        return positions
    }

    const positions = generatePositions()

    return (
        <group position={position} rotation={rotation}>
            {positions.map(({ position, key }) => (
                <group key={key} position={position}>
                    <BaseArc innerMaterial={innerMaterial} outerMaterial={outerMaterial} />
                </group>
            ))}
        </group>
    )
}

export function SingleBuilding({
    position,
    rotation,

    height = 2.1, // è l' altezza di un BaseArc
    width = 1.3, // è la larghezza di un BaseArc
    depth = 1.3, // è quanto un BaseArc è profondo

    innerMaterial = globalMaterials.emissiveRedMat,
    outerMaterial = globalMaterials.brickMat,
    baseMaterial = globalMaterials.metallic.black,
    buildingSequence = [1, 1, 1] }) {

    return <>
        <group position={position} rotation={rotation}>

            <HalfBuilding
                position={[width * buildingSequence.length * 0.5, 0.3, 0]}
                innerMaterial={innerMaterial}
                outerMaterial={outerMaterial}
                buildingSequence={buildingSequence} />

            {/* BASE SOTTOSTANTE */}

            <RigidBody type=" fixed">

                <mesh
                    castShadow
                    receiveShadow
                    position={[width * 0.5, 0.15, -width * 0.5]}
                    material={baseMaterial}
                >
                    <boxGeometry args={[(buildingSequence.length * width) + width, 0.3, 2 * width]} />
                </mesh>
            </RigidBody>
        </group>
    </>
}


