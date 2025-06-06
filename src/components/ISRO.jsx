import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import isro from "../assets/ISRO.svg";

const ISRODemo = ({
  backgroundColor = "#000000",
  particleColor = "#ffffff",
  particleShape = "circle",
  particleCount = 400,
  mobileParticleCount = 100,
  className = "",
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    preset: "stars",
    particles: {
      number: {
        value: particleCount,
      },
      color: {
        value: particleColor,
      },
      shape: {
        type: particleShape,
      },
    },
    background: {
      color: {
        value: backgroundColor,
      },
    },
    responsive: [
      {
        maxWidth: 640, // Small devices (mobile)
        options: {
          particles: {
            number: {
              value: mobileParticleCount,
            },
          },
        },
      },
      {
        maxWidth: 768, // Medium devices (tablets)
        options: {
          particles: {
            number: {
              value: Math.floor(particleCount * 0.7), // 70% of particles for tablets
            },
          },
        },
      },
      {
        maxWidth: 1024, // Large devices (small laptops)
        options: {
          particles: {
            number: {
              value: Math.floor(particleCount * 0.85), // 85% of particles for small laptops
            },
          },
        },
      },
    ],
  };

  if (!init) {
    return (
      <div
        className={`flex items-center justify-center h-screen w-full ${className}`}
        style={{ backgroundColor }}
      >
        <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">Loading stars...</div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative flex flex-col items-center justify-center h-full text-center font-serif font-bold text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8">
          Indian Space Research Organisation
        </h1>
        <img
          src={isro}
          alt="ISRO Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 mx-auto"
        />
      </div>
    </div>
  );
};

export default ISRODemo;