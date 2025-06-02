import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

const ISRODemo = ({
  backgroundColor = "#001a33",
  particleColor = "#ffffff",
  particleShape = "circle",
  particleCount = 200,
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
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: mobileParticleCount,
            },
          },
        },
      },
    ],
  };

  if (!init) {
    return (
      <div 
        className={`flex items-center justify-center h-screen ${className}`}
        style={{ backgroundColor }}
      >
        <div className="text-white text-xl">Loading stars...</div>
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
    </div>
  );
};

export default ISRODemo;