import { AdvancedThreeSamples } from '@/components/three/advanced-three-samples'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* ヘッダー */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Vanilla Three.js Demo</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/r3f"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Try R3F Demo →
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <AdvancedThreeSamples />
    </div>
  )
}
