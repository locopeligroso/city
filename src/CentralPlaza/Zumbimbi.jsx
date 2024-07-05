import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

import globalMaterials from "../globalMaterials"

function MatitaDritta({ position }) {

    const { nodes } = useGLTF('./models/Zumbimbi.gltf')

    const dritta = useRef()

    useFrame((state) => {
        const time = state.clock.elapsedTime

        dritta.current.rotation.y = time * 2

        dritta.current.position.z = Math.sin(time * 3)
        dritta.current.position.x = Math.cos(time * 3)

    })


    return (
        <group ref={dritta} scale={0.005} position={position}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.matita.geometry}
                material={globalMaterials.metallic.black}
                rotation={[-Math.PI / 2, 0, Math.PI]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.legno.geometry}
                    material={globalMaterials.floorMat}
                    position={[-2.153, 0, 434.832]}
                />
            </mesh>

        </group>
    )

}

function MatitaCurva({ position, material }) {
    const { nodes } = useGLTF('./models/Zumbimbi.gltf');

    return (
        <group position={position}>
            <group position={[2, 0, 0]} scale={0.008} rotation={[0, 0, Math.PI * 0.5]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.matitaPiegata.geometry}
                    material={material}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.legnopiegato.geometry}
                        material={globalMaterials.floorMat}
                        position={[0.893, 168.658, -355.1]}
                    />
                </mesh>
            </group>
        </group>
    );
}


function Matite({ position = [0, 0.65, 0], count = 5, materials = [globalMaterials.metallic.orange, globalMaterials.metallic.blue, globalMaterials.metallic.red] }) {
    const pencilsRef = useRef([]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        pencilsRef.current.forEach((matita, index) => {
            if (matita) {
                matita.rotation.y = -time + (index * Math.PI / count); // Apply offset to each pencil
            }
        });
    });

    return (
        <group position={position} rotation={[0, Math.PI * 0.5, 0]}>
            {Array.from({ length: count }).map((_, index) => (
                <group
                    key={index}
                    position={[0, (index * 1) + 0.65 * 0.5, 0]}
                    ref={el => pencilsRef.current[index] = el}
                >
                    <MatitaCurva material={materials[index % materials.length]} />
                </group>
            ))}
        </group>
    );
}



export default function Zumbimbi({ position = [0, 0.3, 0] }) {
    return (
        <group position={position}>
            <MatitaDritta position={[0, 0.4, 0]} />
            <Matite
                position={[0, 0.4, 0]}
                materials={[globalMaterials.metallic.orange, globalMaterials.metallic.blue, globalMaterials.metallic.red]}
            />
            <mesh material={globalMaterials.metallic.red} position={[0, 0.1, 0]}>
                <cylinderGeometry args={[3, 3, 0.2]} />
            </mesh>
            <mesh material={globalMaterials.metallic.black} position={[0, 0.3, 0]}>
                <cylinderGeometry args={[2, 2, 0.2]} />
            </mesh>
        </group>
    )
}