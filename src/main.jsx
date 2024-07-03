import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'


import './styles.css'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
  <StrictMode>
    <Leva
    />

    <Canvas
      flat
      camera={{
        fov: 50,
        near: 0.1,
        far: 300,
        position: [10, 10, 10]
      }
      }
      shadows
    >
      <Perf position='top-left' />
      <Experience />

    </Canvas>
  </StrictMode>
)