// components/three/advanced-three-samples.tsx
'use client'

import { GUI } from 'lil-gui'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function AdvancedThreeSamples() {
  const containerRef = useRef<HTMLDivElement>(null)
  const guiRef = useRef<GUI | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // 基本シーン作成
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )

    // レンダラーを透明にする
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // 透明背景を有効
      antialias: true,
    })

    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0) // 背景を完全透明に
    container.appendChild(renderer.domElement)

    // 立方体作成
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    // GUI設定オブジェクト
    const settings = {
      rotationSpeedX: 0.01,
      rotationSpeedY: 0.01,
      color: '#00ff00',
      wireframe: false,
      scale: 1,
    }

    // GUI作成
    const gui = new GUI()
    guiRef.current = gui

    gui.add(settings, 'rotationSpeedX', 0, 0.1, 0.001).name('回転速度 X')
    gui.add(settings, 'rotationSpeedY', 0, 0.1, 0.001).name('回転速度 Y')
    gui
      .addColor(settings, 'color')
      .name('色')
      .onChange((value: string) => {
        material.color.set(value)
      })
    gui
      .add(settings, 'wireframe')
      .name('ワイヤーフレーム')
      .onChange((value: boolean) => {
        material.wireframe = value
      })
    gui
      .add(settings, 'scale', 0.1, 3, 0.1)
      .name('スケール')
      .onChange((value: number) => {
        cube.scale.setScalar(value)
      })

    // リサイズハンドリング
    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += settings.rotationSpeedX
      cube.rotation.y += settings.rotationSpeedY

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()

      if (guiRef.current) {
        guiRef.current.destroy()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen w-full" style={{ background: 'transparent' }} />
  )
}
