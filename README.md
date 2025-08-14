# 🚀 Next.js + Three.js Hybrid Template

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-red?logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**The Ultimate Starter Template for Modern 3D Web Application Development**

[📺 Live Demo](#) • [🐛 Bug Reports](../../issues) • [💡 Feature Requests](../../issues/new)

---

## ✨ Features

### 🚀 **Core Technologies**
- **⚡ Next.js 14** - App Router, SSG, ISR support
- **🔷 TypeScript** - Complete type safety
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🌓 Theme Support** - Automatic dark/light mode switching

### 🎭 **Three.js Ecosystem**
- **🎮 Vanilla Three.js** - Maximum performance and control
- **⚛️ React Three Fiber** - Declarative 3D programming
- **🛠️ Drei Helpers** - Useful component library
- **🎛️ lil-gui** - Real-time parameter adjustment

### 🔧 **Developer Experience**
- **📱 PWA Ready** - Offline functionality
- **🔍 Biome** - Fast linter & formatter
- **🧪 Automated Testing** - CI/CD pipeline support
- **📊 Bundle Analysis** - Performance optimization

### 🎨 **Rich Samples**
- **Particle Systems** - Dynamic animations
- **Material Showcase** - Various Three.js materials
- **Lighting Techniques** - Advanced lighting setups
- **Geometry Exhibition** - Complex 3D shapes
- **Custom Shaders** - GLSL integration

## 🎯 Quick Start

### **Use This Template**

```bash
# Create from GitHub template
npx create-next-app@latest my-3d-app --example https://github.com/your-username/nextjs-threejs-template

# Or manual clone
git clone https://github.com/your-username/nextjs-threejs-template.git my-3d-app
cd my-3d-app
npm install
npm run dev
```

### **Open Browser**
[http://localhost:3000](http://localhost:3000)

## 🎮 Demo Samples

| Sample | Description | Technology |
|--------|-------------|------------|
| **Basic Vanilla** | Basic cube and lighting | Three.js + lil-gui |
| **Basic R3F** | JSX-based declarative 3D scene | R3F + Drei |
| **Advanced Particles** | High-performance particle system | InstancedMesh |
| **Material Showcase** | Comparison of various materials | PBR Materials |
| **Shader Effects** | Custom GLSL shaders | WebGL Shaders |

## 📁 Project Structure

```
nextjs-threejs-template/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx   # Theme provider
│   ├── three/
│   │   ├── advanced-three-samples.tsx  # Vanilla Three.js demos
│   │   └── advanced-r3f-samples.tsx    # R3F demos
│   └── ui/
│       ├── button.tsx          # Button component
│       └── theme-toggle.tsx    # Theme toggle
├── lib/
│   └── utils.ts                # Utility functions
├── types/
│   └── global.d.ts            # Global type definitions
├── public/                     # Static files
├── biome.json                  # Biome configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🛠️ Development Guide

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run check` | Code validation with Biome |
| `npm run check:fix` | Auto-fix code issues |
| `npm run format` | Format code |

### **Environment Setup**

```bash
# Environment variables setup
cp .env.example .env.local
# Edit values as needed

# Development environment check
npm run check        # Code quality check
npm run format       # Code formatting
```

## 🎯 Three.js Approach Selection Guide

### 🔧 **When to Choose Vanilla Three.js**

✅ **Recommended scenarios:**
- Large-scale complex 3D applications
- Maximum performance required
- Heavy use of custom shaders
- Fine-grained rendering control needed

```typescript
// High-performance particle system
const particles = new THREE.Points(geometry, material)
particles.frustumCulled = true
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
```

### ⚛️ **When to Choose React Three Fiber**

✅ **Recommended scenarios:**
- React-based applications
- Prefer declarative code style
- Component-based 3D elements
- React ecosystem integration

```jsx
// Declarative 3D scene description
<Canvas>
  <OrbitControls />
  <ambientLight intensity={0.5} />
  <Box position={[0, 0, 0]} onClick={handleClick}>
    <meshStandardMaterial color="hotpink" />
  </Box>
</Canvas>
```

## 🎨 Customization Guide

### **Theme Configuration**

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... other color definitions
      }
    }
  }
}
```

### **Adding New Samples**

```typescript
// components/three/my-sample.tsx
export function MySample() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Three.js implementation
  }, [])

  return <div ref={containerRef} className="h-full w-full" />
}
```

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Using Vercel CLI
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployment

### **Other Platforms**

| Platform | Steps |
|----------|-------|
| **Netlify** | `npm run build` → Deploy `out` folder |
| **Cloudflare Pages** | Git integration for auto-deploy |
| **AWS Amplify** | Repository connection for CI/CD |

## ⚡ Performance Optimization

### **Three.js Optimization Techniques**

```typescript
// ✅ Proper cleanup
useEffect(() => {
  return () => {
    geometry.dispose()
    material.dispose()
    texture.dispose()
    renderer.dispose()
  }
}, [])

// ✅ Instancing
const instancedMesh = new THREE.InstancedMesh(geometry, material, count)

// ✅ LOD (Level of Detail)
const lod = new THREE.LOD()
lod.addLevel(highDetailMesh, 0)
lod.addLevel(lowDetailMesh, 100)
```

## 🧪 Testing Strategy

```bash
npm run check               # Biome validation
npm run format              # Code formatting
npm run build               # Build test
```

## 🤝 Contributing

We welcome contributions from the community!

### **How to Contribute**

1. **Report Issues:** [Bug Reports](../../issues/new) or [Feature Requests](../../issues/new)
2. **Pull Requests:** Fork → Create branch → Create PR
3. **Discussions:** [GitHub Discussions](../../discussions)

### **For Developers**

```bash
# Setup
git clone https://github.com/your-username/nextjs-threejs-template.git
cd nextjs-threejs-template
npm install
npm run dev

# Code quality
npm run check:fix          # Auto-fix
npm run format             # Format
```

## 📚 Learning Resources

### 📖 **Documentation**
- [Three.js Official Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

### 🎓 **Tutorials**
- [Three.js Journey](https://threejs-journey.com/)
- [React Three Fiber Tutorial](https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations)
- [Next.js Learn](https://nextjs.org/learn)

## 🔧 Troubleshooting

### **Common Issues**

**WebGL Errors:**
```typescript
// WebGL support check
if (!renderer.capabilities.isWebGL2Available) {
  // WebGL1 fallback
}
```

**Memory Leaks:**
```typescript
// Proper Three.js object disposal
scene.traverse((object) => {
  if (object instanceof THREE.Mesh) {
    object.geometry.dispose()
    object.material.dispose()
  }
})
```

**Theme Toggle Not Working:**
```bash
# Restart development server
npm run dev
```

### **Browser Support**

| Browser | Support Status |
|---------|----------------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| Mobile | ⚠️ WebGL-capable devices |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

This template is built upon these amazing projects:

- [Three.js](https://threejs.org/) - Mr.doob and contributors
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - Poimandres
- [Next.js](https://nextjs.org/) - Vercel
- [Tailwind CSS](https://tailwindcss.com/) - Tailwind Labs

---

**If this template helped you, please give it a ⭐!**

[🌟 Star this repo](../../stargazers) • [🍴 Fork](../../fork) • [📢 Share](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20Next.js%20%2B%20Three.js%20template!)

**Happy coding! 🚀**