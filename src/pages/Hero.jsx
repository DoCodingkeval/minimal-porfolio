import { PointerHighlight, socialLinks, Typed } from "../imports/Files";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I am Keval Gohel"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="min-h-screen xl:min-h-[95vh] flex items-center justify-center w-full py-10 pt-24"
      id="hero"
    >
      <div className="grid lg:grid-cols-2 h-full xl:pt-10">
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          src="hero-vector.svg"
          className="lg:order-1 lg:mt-10 xl:scale-110 xl:mt-0 pr-5"
          alt="hero image"
        />
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 lg:mt-0 flex flex-col flex-wrap"
        >
          <div className="text-2xl md:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-14 xl:leading-17">
            <div className="whitespace-nowrap">
              Hello, <span ref={el} className="font-semibold"></span>
            </div>
            <PointerHighlight>
              <span className="font-extrabold inline-block">
                Frontend{" "}
                <span className="text-stroke font-bold text-white dark:text-zinc-900">
                  Developer&nbsp;
                </span>
              </span>
            </PointerHighlight>
            Based in <span className="font-extrabold">India.</span>
          </div>
          <p className="text-sm text-gray mt-3 lg:w-sm xl:text-[1rem] xl:w-full xl:mt-4">
            Passionate about technology, I specialize in Web Development and
            Design. I focus on creating innovative solutions, growing my skills,
            and contributing to impactful projects.
          </p>
          <div className="flex items-center gap-5 mt-4 xl:mt-6">
            {socialLinks.map((sociallink) => (
              <a
                key={sociallink.id}
                href={sociallink.href}
                target="_blank"
                className="border-2 border-black size-9 grid place-items-center shadow-[3px_3px_0px_#000] hover:bg-black hover:text-white transition-all duration-400 dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:bg-zinc-900"
              >
                {sociallink.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
