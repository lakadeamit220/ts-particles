import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const TsParticlesDemo = () => {
  const [init, setInit] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [particlesColor, setParticlesColor] = useState("#3B82F6"); // Start with Tailwind blue-500

  // Tailwind CSS main colors (500 variants)
  const tailwindColors = [
    "#EF4444",  // red-500
    "#3B82F6",  // blue-500
    "#10B981",  // green-500
    "#F59E0B",  // yellow-500
    "#6366F1",  // indigo-500
    "#8B5CF6",  // purple-500
    "#EC4899",  // pink-500
    "#F97316",  // orange-500
    "#06B6D4",  // cyan-500
    "#14B8A6",  // teal-500
  ];

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
    setParticlesColor(tailwindColors[clickCount % tailwindColors.length]);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particlesColor,
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          className="absolute top-0 left-0"
        />
      )}
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     text-center text-gray-800 z-10 w-4/5 max-w-4xl bg-white/80 p-8 
                     rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          React Particles.js Demo
        </h1>
        
        <div className="text-left mb-8">
          <p className="text-lg mb-4">
            This component demonstrates the <strong>@tsparticles/react</strong> library with Tailwind CSS colors.
          </p>
          
          <ul className="mb-4 list-disc pl-6">
            <li>Particles connect with lines when close to each other</li>
            <li>Hover to repel particles with your cursor</li>
            <li>Click anywhere to push particles away</li>
            <li>The button cycles through Tailwind's main colors</li>
          </ul>
          
          <p className="text-lg">
            Current color: <span 
              className="font-bold" 
              style={{ color: particlesColor }}
            >
              {particlesColor}
            </span>
          </p>
        </div>
        
        <button 
          onClick={handleButtonClick}
          className={`px-6 py-3 text-lg font-bold text-white rounded-lg transition-colors duration-300`}
          style={{ backgroundColor: particlesColor }}
        >
          Click Me ({clickCount} clicks) -  Change Particle Color
        </button>
        
        <div className="mt-8 text-sm text-gray-600">
          <p>Try interacting with the particles in the background!</p>
          <p className="mt-2">Colors: red-500, blue-500, green-500, yellow-500, indigo-500, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default TsParticlesDemo;