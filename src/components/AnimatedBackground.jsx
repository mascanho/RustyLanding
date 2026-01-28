import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedBackground = () => {
  const bgRef = useRef(null);
  const particlesRef = useRef([]);
  const blobsRef = useRef([]);

  useEffect(() => {
    const particles = particlesRef.current;
    const blobs = blobsRef.current;

    // Animate floating particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 100 - 50,
        rotation: 360,
        duration: 15 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: particle,
          start: "top bottom",
          end: "bottom top",
          scrub: 1 + index * 0.5,
        },
      });
    });

    // Animate gradient blobs
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        scale: 1.2,
        rotation: -180,
        duration: 20 + index * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: blob,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    });

    // Background color animation based on scroll
    gsap.to(bgRef.current, {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      scrollTrigger: {
        trigger: "body",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 2,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={bgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        filter: 'blur(60px)',
      }}
    >
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => blobsRef.current[0] = el}
          className="absolute w-96 h-96 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(255,182,193,0.8) 0%, rgba(255,105,180,0.4) 50%, transparent 70%)',
            top: '10%',
            left: '20%',
            filter: 'blur(40px)',
          }}
        />
        <div 
          ref={el => blobsRef.current[1] = el}
          className="absolute w-80 h-80 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(135,206,250,0.8) 0%, rgba(30,144,255,0.4) 50%, transparent 70%)',
            top: '60%',
            right: '15%',
            filter: 'blur(35px)',
          }}
        />
        <div 
          ref={el => blobsRef.current[2] = el}
          className="absolute w-72 h-72 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,140,0,0.4) 50%, transparent 70%)',
            bottom: '20%',
            left: '10%',
            filter: 'blur(30px)',
          }}
        />
        <div 
          ref={el => blobsRef.current[3] = el}
          className="absolute w-64 h-64 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(144,238,144,0.8) 0%, rgba(34,139,34,0.4) 50%, transparent 70%)',
            top: '40%',
            left: '50%',
            filter: 'blur(25px)',
          }}
        />
        <div 
          ref={el => blobsRef.current[4] = el}
          className="absolute w-88 h-88 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(221,160,221,0.8) 0%, rgba(138,43,226,0.4) 50%, transparent 70%)',
            top: '70%',
            left: '60%',
            filter: 'blur(45px)',
          }}
        />
      </div>

      {/* Small floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-2 h-2 rounded-full opacity-80"
            style={{
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;