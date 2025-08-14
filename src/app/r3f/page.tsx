import { AdvancedR3FSamples } from '@/components/three/advanced-r3f-samples'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import Link from 'next/link'

export default function R3FPage() {
  return (
    <div className="relative min-h-screen">
      {/* ヘッダー */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            React Three Fiber Demo
          </h1>
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              ← Try Vanilla Demo
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <AdvancedR3FSamples />
    </div>
  )
}