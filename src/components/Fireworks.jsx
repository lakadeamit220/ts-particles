import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFireworksPreset } from "@tsparticles/preset-fireworks";

const FireworksComponent = () => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine once when component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the fireworks preset into the engine
      await loadFireworksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration options
  const particlesOptions = {
    // Use the fireworks preset as the base configuration
    preset: "fireworks",

    // Additional customizations
    particles: {
      shape: {
        type: "square", // Override default shape to squares
      },
    },

    // Background configuration
    background: {
      color: {
        value: "#0d1117", // Dark background to make fireworks pop
      },
    },

    // Responsive configuration
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 50, // Fewer particles on mobile for performance
            },
          },
        },
      },
    ],
  };

  // Don't render until particles engine is initialized
  if (!init) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-xl">Loading fireworks...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Fireworks Spectacular
          </h1>

          <div className="rounded-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
              Component Features
            </h2>

            <div className="text-left space-y-4 text-sm md:text-base">
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-semibold text-green-300 mb-2">
                  Particle Configuration
                </h3>
                <p>
                  Uses the "fireworks" preset with custom square-shaped
                  particles. The background is set to dark to enhance the
                  fireworks visibility, and responsive settings optimize
                  performance on mobile devices.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="font-semibold text-purple-300 mb-2">
                  Performance Optimization
                </h3>
                <p>
                  Includes responsive configuration that reduces particle count
                  on smaller screens. The component only renders after
                  initialization is complete to prevent errors.
                </p>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="font-semibold text-red-300 mb-2">
                  Visual Design
                </h3>
                <p>
                  Features a layered design with particles in the background and
                  content overlay with backdrop blur effects. The layout is
                  fully responsive and centers content both horizontally and
                  vertically.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-gray-300">
            <p className="text-lg">
              Click anywhere to trigger more fireworks! 🎇
            </p>
            <p className="text-sm mt-2 opacity-75">
              Built with tsParticles React + Fireworks Preset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireworksComponent;
