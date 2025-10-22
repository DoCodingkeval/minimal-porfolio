import { motion } from 'motion/react';

const About = () => {
  return (
    <section
      className="mx-auto flex w-full scroll-mt-20 items-center justify-center py-10"
      id="about"
    >
      <div className="grid lg:grid-cols-2">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          src="about-me.svg"
          className="sm:w-1/2 lg:w-5/6"
          alt="my image"
          loading="lazy"
        />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 flex flex-col gap-4"
        >
          <h1 className="text-3xl lg:text-4xl">
            About <span className="font-extrabold">Me</span>
          </h1>
          <p className="text-gray text-sm leading-relaxed">
            I’m a software engineer with a strong interest in web technologies.
            I enjoy turning ideas into clean, responsive, and functional
            websites. Always learning, always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
