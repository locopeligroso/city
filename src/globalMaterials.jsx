import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import globalColors from './globalColors'

const textureLoader = new THREE.TextureLoader()

const globalTextures = {
    //Bricks Texture
    brickAOMap: textureLoader.load('./models/textures/brick/plaster_brick_pattern_ao_1k.jpg'),
    brickNormalMap: textureLoader.load('./models/textures/brick/plaster_brick_pattern_nor_dx_1k.png')
}



const globalMaterials = {

    // Floor standar material
    floorMat: new THREE.MeshStandardMaterial({ color: globalColors.beige }),


   // Metallic materials
  metallic: {
    black: new THREE.MeshStandardMaterial({
      color: globalColors.black,
      metalness: 1,
      roughness: 0.4
    }),
    white: new THREE.MeshStandardMaterial({
      color: globalColors.white,
      metalness: 0.1,
      roughness: 0.15
    }),
    red: new THREE.MeshStandardMaterial({
      color: globalColors.reddish,
      metalness: 0.1,
      roughness: 0.15
    }),
    blue: new THREE.MeshStandardMaterial({
      color: globalColors.skyblue,
      metalness: 0.1,
      roughness: 0.15
    }),
    orange: new THREE.MeshStandardMaterial({
      color: globalColors.orangeyellow,
      metalness: 0.1,
      roughness: 0.15
    }),
    all: function() {
      return [this.black, this.white, this.red, this.blue, this.orange];
    }
  },

    /**
     * EMISSIVE
     */
    emissiveBlueMat: new THREE.MeshStandardMaterial({
        color: globalColors.skyblue,
        emissive: globalColors.skyblue,
        emissiveIntensity: 2.0 // Imposta l'intensità dell'emissione
    }),

    emissiveRedMat: new THREE.MeshStandardMaterial({
        color: globalColors.reddish,
        emissive: globalColors.reddish,
        emissiveIntensity: 3.0 // Imposta l'intensità dell'emissione
    }),

    //Brick Material
    brickMat: new THREE.MeshStandardMaterial({
        color: globalColors.beige,
        aoMap: globalTextures.brickAOMap,
        normalMap: globalTextures.brickNormalMap
    }),




}

export default globalMaterials