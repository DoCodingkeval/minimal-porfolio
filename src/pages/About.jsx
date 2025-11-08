import { motion } from 'motion/react';

const About = () => {
  return (
    <section
      className="scroll-mt-20"
      id="about"
    >
      <div className="grid lg:grid-cols-2 gap-6">
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
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className=""
        >
          <h1 className="text-3xl lg:text-4xl">
            About <span className="font-extrabold">Me</span>
          </h1>
          <p className="text-gray text-sm leading-relaxed mt-4">
            I’m a associate software engineer with a strong interest in web technologies.
            I enjoy turning ideas into clean, responsive, and functional
            websites. Always learning, always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
