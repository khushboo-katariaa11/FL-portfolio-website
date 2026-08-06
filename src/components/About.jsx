import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          About the builder
        </p>

        <AnimatedTitle
          title="Build websites that <br /> level up your brand"
          containerClass="mt-5 max-w-7xl text-center !text-black !text-4xl sm:!text-5xl md:!text-6xl lg:!text-[5rem] xl:!text-[5.75rem] !leading-[0.9]"
        />

        <div className="about-subtext">
          <p>
            I design and develop cinematic websites that help small businesses
            look sharper, earn trust faster, and bring in better leads.
          </p>
          <p className="text-gray-500">
            Think of it like a quest upgrade: polished visuals, smoother user
            experience, and a clearer path from first click to booked project.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Freelancer workspace background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
