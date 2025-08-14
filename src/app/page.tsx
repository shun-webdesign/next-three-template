import { AdvancedThreeSamples } from '@/components/three/advanced-three-samples'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <AdvancedThreeSamples />
    </div>
  )
}
