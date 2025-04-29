"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

interface CountryInfo {
  name: string;
  capital: string;
  population: string;
  area: string;
  languages: string[];
  continent: string;
  description: string;
}

// Sample country data
const countries = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    area: 9833517,
    languages: ["English"],
    continent: "North America",
    description: "The United States of America is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, and various possessions."
  },
  {
    name: "China",
    capital: "Beijing",
    population: 1444216107,
    area: 9596961,
    languages: ["Mandarin"],
    continent: "Asia",
    description: "China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country with a population exceeding 1.4 billion."
  },
  // More countries can be added here
];

const Globe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  
  const [isHovering, setIsHovering] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Earth texture URLs from public sources
  const textureUrls = {
    earthMap: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg",
    earthBumpMap: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg",
    earthSpecularMap: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg",
    earthClouds: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png",
    earthNightMap: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_lights_2048.png"
  };

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Add directional light (sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add point lights for highlights
    const blueLight = new THREE.PointLight(0x0077ff, 1, 50);
    blueLight.position.set(-15, 5, 15);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x9900ff, 1, 50);
    purpleLight.position.set(15, -5, -15);
    scene.add(purpleLight);

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      45, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create renderer with antialiasing and better shadows
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    (renderer as any).outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controlsRef.current = controls;

    // Create Earth with realistic textures
    const earthGroup = new THREE.Group();
    globeRef.current = earthGroup;
    scene.add(earthGroup);

    // Load Earth textures
    const textureLoader = new THREE.TextureLoader();
    
    // Track loading progress
    let totalTextures = Object.keys(textureUrls).length;
    let loadedTextures = 0;
    
    const updateProgress = () => {
      loadedTextures++;
      setLoadingProgress((loadedTextures / totalTextures) * 100);
      if (loadedTextures === totalTextures) {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    // Earth sphere with detailed textures
    textureLoader.load(textureUrls.earthMap, (texture) => {
      const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: texture,
        bumpMap: null,
        bumpScale: 0.05,
        specularMap: null,
        specular: new THREE.Color(0x333333),
        shininess: 15,
      });
      
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      earthMesh.castShadow = true;
      earthMesh.receiveShadow = true;
      earthGroup.add(earthMesh);
      
      updateProgress();
      
      // Load bump map (terrain)
      textureLoader.load(textureUrls.earthBumpMap, (bumpMap) => {
        earthMaterial.bumpMap = bumpMap;
        updateProgress();
      });
      
      // Load specular map (water reflections)
      textureLoader.load(textureUrls.earthSpecularMap, (specMap) => {
        earthMaterial.specularMap = specMap;
        updateProgress();
      });

      // Load night lights map
      textureLoader.load(textureUrls.earthNightMap, (nightMap) => {
        // We're not using this directly on the main material, but it's loaded for progress tracking
        updateProgress();
      });
    });

    // Add clouds layer
    textureLoader.load(textureUrls.earthClouds, (cloudsTexture) => {
      const cloudsGeometry = new THREE.SphereGeometry(2.05, 64, 64);
      const cloudsMaterial = new THREE.MeshPhongMaterial({
        map: cloudsTexture,
        transparent: true,
        opacity: 0.4,
      });
      
      const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      earthGroup.add(cloudsMesh);
      
      updateProgress();
    });

    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x0077ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });
    
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earthGroup.add(atmosphereMesh);

    // Add stars background
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPositions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i += 3) {
      starsPositions[i] = (Math.random() - 0.5) * 100;
      starsPositions[i + 1] = (Math.random() - 0.5) * 100;
      starsPositions[i + 2] = (Math.random() - 0.5) * 100;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (globeRef.current && isRotating && !isHovering) {
        globeRef.current.rotation.y += 0.001;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (globeRef.current) {
        scene.remove(globeRef.current);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Handle mouse interactions
  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !cameraRef.current || !sceneRef.current) return;

      // Update mouse position for raycasting
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;

      // Store mouse position for UI elements
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });

      // Raycast to detect country hover
      if (globeRef.current) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(globeRef.current.children, true);
        
        if (intersects.length > 0) {
          document.body.style.cursor = 'pointer';
        } else {
          document.body.style.cursor = 'default';
        }
      }
    };

    const handleMouseClick = (event: MouseEvent) => {
      if (!containerRef.current || !cameraRef.current || !sceneRef.current || !globeRef.current) return;

      // Update mouse position for raycasting
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;

      // Raycast to detect country click
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObjects(globeRef.current.children, true);
      
      if (intersects.length > 0) {
        // For demo purposes, we'll just pick a random country
        const randomCountryIndex = Math.floor(Math.random() * countries.length);
        const country = countries[randomCountryIndex];
        
        setSelectedCountry({
          name: country.name,
          capital: country.capital,
          population: country.population.toLocaleString(),
          area: country.area.toLocaleString() + " km²",
          languages: country.languages,
          continent: country.continent,
          description: country.description
        });
        
        setShowInfo(true);
        
        // Pause auto-rotation when viewing country info
        if (controlsRef.current) {
          controlsRef.current.autoRotate = false;
        }
        setIsRotating(false);
      } else {
        setShowInfo(false);
        
        // Resume auto-rotation when not viewing country info
        if (controlsRef.current) {
          controlsRef.current.autoRotate = true;
        }
        setIsRotating(true);
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      if (controlsRef.current) {
        controlsRef.current.enabled = true;
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
      }
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('click', handleMouseClick);
    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('click', handleMouseClick);
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black/50 rounded-xl">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 z-50 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-xl mb-4">Initializing Global Scan</div>
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-blue-400 mt-2 text-sm">{Math.round(loadingProgress)}%</div>
        </div>
      )}
      
      {/* HUD Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {/* Top HUD Bar */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-12 bg-blue-900/20 backdrop-blur-sm border-b border-blue-500/30 flex items-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-blue-400 font-mono text-sm">JARVIS GLOBAL MONITORING SYSTEM</div>
          <div className="ml-auto text-blue-300 font-mono text-xs">
            {new Date().toLocaleTimeString()} UTC
          </div>
        </motion.div>
        
        {/* Corner Elements */}
        <motion.div 
          className="absolute top-16 left-4 w-32 h-32 border border-blue-500/30 rounded-lg bg-blue-900/10 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="p-2">
            <div className="text-blue-400 text-xs mb-2 font-mono">GLOBAL STATS</div>
            <div className="text-blue-300 text-xs font-mono">Countries: 195</div>
            <div className="text-blue-300 text-xs font-mono">Population: 7.9B</div>
            <div className="text-blue-300 text-xs font-mono">Satellites: 5,465</div>
            <div className="text-blue-300 text-xs font-mono">Temp: 15.8°C</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-16 right-4 w-32 h-32 border border-blue-500/30 rounded-lg bg-blue-900/10 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="p-2">
            <div className="text-blue-400 text-xs mb-2 font-mono">SYSTEM STATUS</div>
            <div className="text-green-400 text-xs font-mono">Satellites: Online</div>
            <div className="text-green-400 text-xs font-mono">Network: Secure</div>
            <div className="text-yellow-400 text-xs font-mono">Weather: Warning</div>
            <div className="text-green-400 text-xs font-mono">Defense: Active</div>
          </div>
        </motion.div>
        
        {/* Bottom HUD Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-12 bg-blue-900/20 backdrop-blur-sm border-t border-blue-500/30 flex items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-blue-400 font-mono text-xs">
            LAT: {mousePosition.y.toFixed(2)} | LON: {mousePosition.x.toFixed(2)} | ZOOM: 1.0x
          </div>
          <div className="ml-auto text-blue-300 font-mono text-xs">
            ROTATE: {isRotating ? 'AUTO' : 'MANUAL'} | SCAN: ACTIVE
          </div>
        </motion.div>
        
        {/* Scanning Lines Effect */}
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Horizontal scan line */}
          <motion.div 
            className="absolute left-0 w-full h-[2px] bg-blue-500/50"
            initial={{ top: 0 }}
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Vertical scan line */}
          <motion.div 
            className="absolute top-0 h-full w-[2px] bg-blue-500/50"
            initial={{ left: 0 }}
            animate={{ left: ['0%', '100%', '0%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
      
      {/* Country Info Panel */}
      <AnimatePresence>
        {showInfo && selectedCountry && (
          <motion.div 
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 bg-gray-900/80 backdrop-blur-md border border-blue-500/50 rounded-lg overflow-hidden z-20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="bg-blue-900/50 p-3 border-b border-blue-500/30">
              <div className="flex justify-between items-center">
                <h3 className="text-blue-300 font-bold">{selectedCountry.name}</h3>
                <button 
                  onClick={() => setShowInfo(false)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-blue-400 text-sm">Capital:</div>
                <div className="text-white text-sm">{selectedCountry.capital}</div>
                
                <div className="text-blue-400 text-sm">Population:</div>
                <div className="text-white text-sm">{selectedCountry.population}</div>
                
                <div className="text-blue-400 text-sm">Area:</div>
                <div className="text-white text-sm">{selectedCountry.area}</div>
                
                <div className="text-blue-400 text-sm">Continent:</div>
                <div className="text-white text-sm">{selectedCountry.continent}</div>
              </div>
              
              <div className="mt-2">
                <div className="text-blue-400 text-sm mb-1">Languages:</div>
                <div className="flex flex-wrap gap-1">
                  {selectedCountry.languages.map((lang, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-2">
                <div className="text-blue-400 text-sm mb-1">Description:</div>
                <p className="text-gray-300 text-sm">{selectedCountry.description}</p>
              </div>
              
              <div className="mt-3 pt-3 border-t border-blue-500/30 flex justify-between">
                <button 
                  className="text-xs bg-blue-600/50 hover:bg-blue-600/80 text-white px-3 py-1 rounded border border-blue-500/50"
                  onClick={() => {
                    // Simulate zooming to country
                    if (controlsRef.current) {
                      controlsRef.current.autoRotate = false;
                      setIsRotating(false);
                    }
                  }}
                >
                  Zoom to Location
                </button>
                
                <button 
                  className="text-xs bg-purple-600/50 hover:bg-purple-600/80 text-white px-3 py-1 rounded border border-purple-500/50"
                  onClick={() => {
                    // Simulate detailed analysis
                    alert(`Detailed analysis of ${selectedCountry.name} initiated.`);
                  }}
                >
                  Detailed Analysis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Globe Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        />
        
        {/* Interaction Hint */}
        {!isHovering && !showInfo && !isLoading && (
          <motion.div 
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-blue-300 text-sm bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            Hover to interact with the globe. Click on locations for details.
          </motion.div>
        )}
      </div>
    );
  };
  
  export default Globe;