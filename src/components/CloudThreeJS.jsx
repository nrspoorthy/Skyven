'use client'

import { useEffect, useRef } from 'react'

export default function CloudThreeJS({ className = '', style = {} }) {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    let renderer, scene, camera, animId
    const W = mountRef.current.offsetWidth
    const H = mountRef.current.offsetHeight

    // ── Dynamically import Three.js ──────────────────────────────────
    import('three').then((THREE) => {

      // ── RENDERER ────────────────────────────────────────────────────
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.1
      mountRef.current.appendChild(renderer.domElement)

      // ── SCENE ────────────────────────────────────────────────────────
      scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0xdce8f0, 0.0018)

      // ── CAMERA ──────────────────────────────────────────────────────
      camera = new THREE.PerspectiveCamera(60, W / H, 1, 3000)
      camera.position.set(0, 80, 400)
      camera.lookAt(0, 60, 0)

      // ── SKY GRADIENT via background shader ──────────────────────────
      // Use a large sphere with gradient material for sky
      const skyGeo = new THREE.SphereGeometry(1400, 32, 16)
      const skyMat = new THREE.ShaderMaterial({
        uniforms: {
          uTopColor:    { value: new THREE.Color(0x6aafc9) },
          uMidColor:    { value: new THREE.Color(0xa8d2e4) },
          uBotColor:    { value: new THREE.Color(0xedc890) },
          uSunColor:    { value: new THREE.Color(0xffd878) },
          uSunDir:      { value: new THREE.Vector3(0.85, 0.30, -0.42).normalize() },
        },
        vertexShader: `
          varying vec3 vWorldPos;
          void main() {
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uTopColor;
          uniform vec3 uMidColor;
          uniform vec3 uBotColor;
          uniform vec3 uSunColor;
          uniform vec3 uSunDir;
          varying vec3 vWorldPos;
          void main() {
            vec3 dir = normalize(vWorldPos);
            float h = dir.y * 0.5 + 0.5; // 0=bottom 1=top

            // Three-stop sky gradient
            vec3 sky = mix(uBotColor, uMidColor, smoothstep(0.0, 0.45, h));
            sky = mix(sky, uTopColor, smoothstep(0.35, 0.80, h));

            // Sun glow — top right
            float sun = pow(max(dot(dir, uSunDir), 0.0), 18.0);
            float halo = pow(max(dot(dir, uSunDir), 0.0), 4.0) * 0.35;
            sky += uSunColor * (sun * 1.2 + halo);

            gl_FragColor = vec4(sky, 1.0);
          }
        `,
        side: THREE.BackSide,
        depthWrite: false,
      })
      scene.add(new THREE.Mesh(skyGeo, skyMat))

      // ── CLOUD SPRITE TEXTURE — soft white circle ────────────────────
      function makeCloudTexture(size = 256) {
        const c   = document.createElement('canvas')
        c.width   = size
        c.height  = size
        const ctx = c.getContext('2d')
        const cx  = size / 2
        const cy  = size / 2
        const r   = size / 2

        // Multiple overlapping radial gradients for lumpy puff
        function addPuff(ox, oy, pr, alpha) {
          const g = ctx.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, pr)
          g.addColorStop(0.00, `rgba(255,255,255,${alpha})`)
          g.addColorStop(0.30, `rgba(252,254,255,${alpha * 0.85})`)
          g.addColorStop(0.58, `rgba(248,252,255,${alpha * 0.55})`)
          g.addColorStop(0.80, `rgba(244,249,254,${alpha * 0.22})`)
          g.addColorStop(1.00, `rgba(240,246,253,0)`)
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.ellipse(cx + ox, cy + oy, pr, pr * 0.75, 0, 0, Math.PI * 2)
          ctx.fill()
        }

        addPuff(0,       0,      r * 0.88, 0.92)
        addPuff( r*0.30, -r*0.18, r * 0.65, 0.75)
        addPuff(-r*0.28, -r*0.16, r * 0.60, 0.70)
        addPuff( r*0.55,  r*0.08, r * 0.52, 0.60)
        addPuff(-r*0.50,  r*0.06, r * 0.50, 0.58)
        addPuff( r*0.18, -r*0.38, r * 0.45, 0.52)
        addPuff(-r*0.16, -r*0.34, r * 0.42, 0.48)

        return new THREE.CanvasTexture(c)
      }

      const cloudTex = makeCloudTexture(512)

      // ── CLOUD LAYERS ────────────────────────────────────────────────
      // Each cloud = billboard sprite with cloud texture
      // 3 layers: far (small, blue-tinted), mid, front (large bright)

      const cloudGroups = []

      function makeCloudLayer(config) {
        const group = new THREE.Group()
        const {
          count, yBase, ySpread, zBase, zSpread,
          scaleMin, scaleMax, opacityMin, opacityMax,
          tint, xSpread
        } = config

        for (let i = 0; i < count; i++) {
          const mat = new THREE.SpriteMaterial({
            map:         cloudTex,
            transparent: true,
            opacity:     opacityMin + Math.random() * (opacityMax - opacityMin),
            color:       new THREE.Color(tint),
            depthWrite:  false,
            blending:    THREE.NormalBlending,
          })

          const sprite = new THREE.Sprite(mat)
          const scale  = scaleMin + Math.random() * (scaleMax - scaleMin)
          // Slightly non-uniform scale for organic look
          sprite.scale.set(
            scale * (0.9 + Math.random() * 0.4),
            scale * (0.55 + Math.random() * 0.25),
            1
          )
          sprite.position.set(
            (Math.random() - 0.5) * xSpread,
            yBase + (Math.random() - 0.5) * ySpread,
            zBase + (Math.random() - 0.5) * zSpread,
          )
          // Random rotation for variety
          sprite.material.rotation = (Math.random() - 0.5) * 0.4

          group.add(sprite)
        }

        scene.add(group)
        cloudGroups.push({ group, ...config })
        return group
      }

      // FAR layer — small, blue-grey, high up
      makeCloudLayer({
        count: 18, yBase: 55, ySpread: 25, zBase: -350, zSpread: 200,
        scaleMin: 60,  scaleMax: 120,  opacityMin: 0.30, opacityMax: 0.55,
        tint: '#c8dce8', xSpread: 900, driftSpeed: 0.8,
      })

      // MID layer — medium, slightly warm white
      makeCloudLayer({
        count: 20, yBase: 35, ySpread: 20, zBase: -150, zSpread: 180,
        scaleMin: 100, scaleMax: 200,  opacityMin: 0.60, opacityMax: 0.82,
        tint: '#eef4f8', xSpread: 1000, driftSpeed: 1.4,
      })

      // FRONT layer — large, bright white, the main cloud mass
      makeCloudLayer({
        count: 22, yBase: 15, ySpread: 30, zBase: 50, zSpread: 150,
        scaleMin: 160, scaleMax: 300,  opacityMin: 0.78, opacityMax: 1.00,
        tint: '#ffffff', xSpread: 1100, driftSpeed: 2.0,
      })

      // FLOOR layer — very large flat clouds merging into white base
      makeCloudLayer({
        count: 14, yBase: -20, ySpread: 12, zBase: 100, zSpread: 200,
        scaleMin: 280, scaleMax: 440,  opacityMin: 0.88, opacityMax: 1.00,
        tint: '#ffffff', xSpread: 1200, driftSpeed: 2.4,
      })

      // ── White fog plane at bottom — merges cloud floor ──────────────
      const fogGeo = new THREE.PlaneGeometry(3000, 1200)
      const fogMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.92,
        depthWrite: false,
      })
      const fogPlane = new THREE.Mesh(fogGeo, fogMat)
      fogPlane.rotation.x = -Math.PI / 2
      fogPlane.position.set(0, -55, 0)
      scene.add(fogPlane)

      // ── ANIMATION ───────────────────────────────────────────────────
      const CYCLE = 10 // seconds
      let lastTime = 0

      function animate(ts) {
        animId = requestAnimationFrame(animate)

        const t  = (ts / 1000) % CYCLE   // 0 → 10 repeating
        const p  = t / CYCLE             // 0 → 1 normalized
        const dt = ts / 1000 - lastTime
        lastTime = ts / 1000

        // Camera flies forward + slightly downward (matching video)
        camera.position.z = 400 - p * 120   // fly forward
        camera.position.y = 80  - p * 22    // dip down into clouds
        camera.lookAt(0, 55 - p * 18, -100)

        // Drift each cloud layer left (parallax)
        cloudGroups.forEach(({ group, driftSpeed }) => {
          group.position.x -= dt * driftSpeed * 4

          // Wrap: when drifted too far left, reset
          if (group.position.x < -180) {
            group.position.x = 0
          }
        })

        renderer.render(scene, camera)
      }

      animId = requestAnimationFrame(animate)

      // ── RESIZE ──────────────────────────────────────────────────────
      function onResize() {
        const w = mountRef.current?.offsetWidth  || W
        const h = mountRef.current?.offsetHeight || H
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      // Cleanup stored on ref for unmount
      mountRef.current._cleanup = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
        cloudTex.dispose()
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement)
        }
      }
    })

    return () => {
      mountRef.current?._cleanup?.()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: '100%', height: '100%', overflow: 'hidden', ...style }}
    />
  )
}