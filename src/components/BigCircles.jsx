import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBigCirclesPreset } from "@tsparticles/preset-big-circles";

const BigCircles = () => {
  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadBigCirclesPreset(engine);
      });
    };

    initializeParticles();
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          preset: "bigCircles",
          background: { color: "#000000" },
          particles: {
            move: { speed: 5 },
            size: { value: { min: 50, max: 100 } },
            opacity: { value: 0.5 }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              onClick: { enable: true, mode: "push" },
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />
      
      {/* Explanatory Content Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      text-center text-white z-10 w-4/5 max-w-3xl bg-black/70 p-8 
                      rounded-lg backdrop-blur-sm border border-white/20">
        <h1 className="text-4xl font-bold mb-6">Big Circles Particle System</h1>
        
        <div className="text-left space-y-4 mb-8">
          <p className="text-lg">
            This component showcases the <span className="text-blue-400 font-mono">bigCircles</span> preset from tsparticles, 
            creating large, elegant circles that float across the screen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-yellow-300">Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Large circle particles (50-100px diameter)</li>
                <li>Smooth, slow movement (speed: 5)</li>
                <li>Semi-transparent (opacity: 0.5)</li>
                <li>Bubble effect on hover</li>
                <li>Push effect on click</li>
                <li>Black background for contrast</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2 text-green-300">Technical Details</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Uses <span className="font-mono">@tsparticles/preset-big-circles</span></li>
                <li>Initialized with <span className="font-mono">initParticlesEngine</span></li>
                <li>React component wrapper</li>
                <li>Customized preset options</li>
                <li>Responsive design</li>
                <li>GPU-accelerated animations</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* <div className="bg-white/10 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-2 text-cyan-300">Try It Out!</h3>
          <p className="mb-2">Hover over the circles to see them react</p>
          <p>Click anywhere to push particles away</p>
        </div> */}
        
        <div className="text-sm text-gray-300">
          <p>Part of the tsparticles library - <span className="text-white">https://particles.js.org/</span></p>
          <p className="mt-1">Customize by editing the options in the component code</p>
        </div>
      </div>
    </div>
  );
};

export default BigCircles;