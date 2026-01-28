import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const BenefitCard = ({ item, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    // Stagger animation on mount
    gsap.fromTo(card, {
      opacity: 0,
      y: 50,
      scale: 0.9,
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: index * 0.1,
      ease: "back.out(1.7)",
    });

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  const gradients = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-green-500 via-emerald-500 to-cyan-500",
    "from-yellow-500 via-orange-500 to-red-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-rose-500 via-fuchsia-500 to-purple-500",
  ];

  return (
    <div
      ref={cardRef}
      className={`block relative p-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} md:max-w-[24rem] rounded-md cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25`}
      key={item.id}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none bg-n-8">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">{item.text}</p>
        <div className="flex items-center mt-auto">
          <img
            src={item.iconUrl}
            width={48}
            height={48}
            alt={item.title}
            className="transition-transform duration-300 hover:scale-110"
          />
          {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"> */}
          {/*   Explore more */}
          {/* </p> */}
          {/* <Arrow /> */}
        </div>
      </div>

      {item.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  );
};

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="One-stop shop for all your SEO needs"
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item, index) => (
            <BenefitCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
