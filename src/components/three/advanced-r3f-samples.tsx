// components/three/advanced-r3f-samples.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { GUI } from 'lil-gui'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface AnimatedBoxProps {
  rotationSpeedX: number
  rotationSpeedY: number
  color: string
  wireframe: boolean
  scale: number
}

function AnimatedBox({
  rotationSpeedX,
  rotationSpeedY,
  color,
  wireframe,
  scale,
}: AnimatedBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeedX
      meshRef.current.rotation.y += rotationSpeedY
    }
  })

  return (
    <Box ref={meshRef} scale={scale}>
      <meshBasicMaterial color={color} wireframe={wireframe} />
    </Box>
  )
}

function Scene({ settings }: { settings: any }) {
  return (
    <>
      <AnimatedBox
        rotationSpeedX={settings.rotationSpeedX}
        rotationSpeedY={settings.rotationSpeedY}
        color={settings.color}
        wireframe={settings.wireframe}
        scale={settings.scale}
      />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  )
}

export function AdvancedR3FSamples() {
  const guiRef = useRef<GUI | null>(null)
  const [settings, setSettings] = useState({
    rotationSpeedX: 0.01,
    rotationSpeedY: 0.01,
    color: '#00ff00',
    wireframe: false,
    scale: 1,
  })

  useEffect(() => {
    // GUI作成
    const gui = new GUI()
    guiRef.current = gui

    gui
      .add(settings, 'rotationSpeedX', 0, 0.1, 0.001)
      .name('回転速度 X')
      .onChange((value) => {
        setSettings((prev) => ({ ...prev, rotationSpeedX: value }))
      })

    gui
      .add(settings, 'rotationSpeedY', 0, 0.1, 0.001)
      .name('回転速度 Y')
      .onChange((value) => {
        setSettings((prev) => ({ ...prev, rotationSpeedY: value }))
      })

    gui
      .addColor(settings, 'color')
      .name('色')
      .onChange((value: string) => {
        setSettings((prev) => ({ ...prev, color: value }))
      })

    gui
      .add(settings, 'wireframe')
      .name('ワイヤーフレーム')
      .onChange((value: boolean) => {
        setSettings((prev) => ({ ...prev, wireframe: value }))
      })

    gui
      .add(settings, 'scale', 0.1, 3, 0.1)
      .name('スケール')
      .onChange((value: number) => {
        setSettings((prev) => ({ ...prev, scale: value }))
      })

    return () => {
      if (guiRef.current) {
        guiRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="h-screen w-full" style={{ background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          alpha: true, // 透明背景を有効
          antialias: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0) // 背景を完全透明に
        }}
      >
        <Scene settings={settings} />
      </Canvas>
    </div>
  )
}
