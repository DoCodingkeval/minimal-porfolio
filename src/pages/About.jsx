import { useGSAP } from '@gsap/react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);
const About = () => {
  useGSAP(() => {
    gsap.to("#about .heading", {
      '--width': '100%',
      duration: 1,
      scrollTrigger: {
        trigger: "#about .heading",
        start: "top 80%",
        once: true,
      }
    })
    const aboutSplitText = new SplitText(".about-text", { type: "words" });
    const mm = gsap.matchMedia();
    mm.add({
      desktop: "(min-width: 1024px)",
      mobile: "(max-width: 1024px)"
    }, (context) => {
      const { mobile } = context.conditions;
      gsap.from(aboutSplitText.words, {
        scrollTrigger: {
          trigger: "#about",
          start: mobile ? "30% 20%" : "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
        opacity: .3,
        stagger: .2
      })
    })

    return () => {
      aboutSplitText.revert();
    }
  })
  return (
    <section
      className="scroll-mt-20"
      id="about"
    >
      <div className="grid lg:grid-cols-2">
        <div className='max-w-md'>
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            src="about-me.svg"
            className="w-full h-full object-cover"
            alt="my image"
            loading="lazy"
          />
        </div>
        <div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-lg:mt-5"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl mb-6 heading w-max p-2">
            About <span className="font-extrabold">Me</span>
          </h2>
          <p className="text-sm about-text md:text-base md:max-w-2xl lg:text-lg xl:text-2xl leading-relaxed lg:leading-10 xl:leading-12">
            I’m a associate software engineer with a strong interest in web technologies.
            I enjoy turning ideas into clean, responsive, and functional
            websites. Always learning, always improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
