import * as THREE from 'three'
import globalColors from './globalColors'

const globalMaterials = {

    floorMat: new THREE.MeshStandardMaterial({ color: globalColors.beige }),

    littleSphereMat: new THREE.MeshStandardMaterial({
        color: globalColors.skyblue,
        emissive: globalColors.skyblue,
        emissiveIntensity: 2.0 // Imposta l'intensità dell'emissione
    }),

    littleSphereMatRed: new THREE.MeshStandardMaterial({
        color: globalColors.reddish,
        emissive: globalColors.reddish,
        emissiveIntensity: 3.0 // Imposta l'intensità dell'emissione
    }),


    blackMetallicMat: new THREE.MeshStandardMaterial({ color: globalColors.black, metalness: 1, roughness: 0.4 })
}

export default globalMaterials