import { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingOrb = ({ className, size = 100, color1 = "#8b5cf6", color2 = "#3b82f6", duration = 20, delay = 0 }) => {
  const orbRef = useRef(null);

  useEffect(() => {
    const orb = orbRef.current;
    
    // Floating animation
    gsap.to(orb, {
      y: -30,
      x: 20,
      duration: duration + Math.random() * 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay,
    });

    // Rotation animation
    gsap.to(orb, {
      rotation: 360,
      duration: duration * 2,
      repeat: -1,
      ease: "none",
      delay: delay,
    });

    // Scale pulse
    gsap.to(orb, {
      scale: 1.2,
      duration: duration / 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: delay,
    });
  }, [duration, delay]);

  return (
    <div
      ref={orbRef}
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 70%, transparent 100%)`,
      }}
    />
  );
};

export default FloatingOrb;