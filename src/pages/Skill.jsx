import gsap from 'gsap';
import Card from '../components/Card';
import { skills } from '../constants';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Skill = () => {
  useGSAP(() => {
    gsap.to("#skill .heading", {
      '--width': '100%',
      duration: 1,
      scrollTrigger: {
        trigger: "#skill .heading",
        start: "top 70%",
        once: true,
      }
    })
  })
  return (
    <section
      className="w-full scroll-mt-14"
      id="skill"
    >
      <h2 className="mb-10 text-center heading text-3xl lg:text-4xl xl:text-5xl w-max mx-auto p-2">
        My <span className="font-extrabold">Skills</span>
      </h2>
      <div
        className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:gap-12">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="border-2 border-black shadow-[3px_3px_1px_#000] relative after:absolute after:content-[''] after:top-full after:left-0 after:w-full after:h-full after:bg-black hover:after:top-0 after:-z-10 hover:text-white after:transition-all overflow-hidden after:duration-300 transition-all duration-300 dark:border-zinc-800 dark:hover:after:bg-neutral-900"
          >
            <a href={skill.href} target='_blank' rel="noopener noreferrer" className='size-full px-4 py-6 grid place-items-center'>
              {skill.icon}
              <h3 className="text-sm font-bold uppercase tracking-wide leading-relaxed">{skill.name}</h3>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skill;
