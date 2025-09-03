import { PointerHighlight, socialLinks, Typed } from '../imports/Files';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am Keval Gohel'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="flex w-full items-center justify-center pt-30 pb-10 xl:h-[94vh] xl:pt-0"
      id="hero"
    >
      <div className="grid lg:grid-cols-2 xl:pt-10">
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          src="hero-vector.svg"
          className="pr-5 lg:order-1 lg:mt-10 xl:mt-0 xl:scale-110"
          alt="hero image"
          loading="lazy"
        />
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 flex flex-col flex-wrap lg:mt-0"
        >
          <div className="text-2xl leading-8 md:text-4xl md:leading-10 lg:leading-14 xl:text-5xl xl:leading-17">
            <div className="whitespace-nowrap">
              Hello, <span ref={el} className="font-semibold"></span>
            </div>
            <PointerHighlight>
              <span className="inline-block font-extrabold">
                Frontend{' '}
                <span className="text-stroke font-bold text-white dark:text-zinc-900">
                  Developer&nbsp;
                </span>
              </span>
            </PointerHighlight>
            Based in <span className="font-extrabold">India.</span>
          </div>
          <p className="text-gray mt-3 text-sm lg:w-sm xl:mt-4 xl:w-full xl:text-[1rem]">
            Passionate about technology, I specialize in Web Development and
            Design. I focus on creating innovative solutions, growing my skills,
            and contributing to impactful projects.
          </p>
          <div className="mt-4 flex items-center gap-5 xl:mt-6">
            {socialLinks.map((sociallink) => (
              <a
                key={sociallink.id}
                href={sociallink.href}
                target="_blank"
                className="grid size-9 place-items-center border-2 border-black shadow-[3px_3px_0px_#000] transition-all duration-400 hover:bg-black hover:text-white dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:bg-zinc-900"
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
