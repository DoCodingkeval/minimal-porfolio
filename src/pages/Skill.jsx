import Card from '../components/Card';
import { skills } from '../constants';

const Skill = () => {
  return (
    <section
      className="w-full scroll-mt-14"
      id="skill"
    >
      <h1 className="mb-10 text-center text-3xl lg:text-4xl">
        My <span className="font-extrabold">Skills</span>
      </h1>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:gap-12">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="items-center border-2 border-black shadow-[3px_3px_1px_#000] relative after:absolute after:content-[''] after:top-full after:left-0 after:w-full after:h-full after:bg-black hover:after:top-0 after:-z-10 hover:text-white after:transition-all overflow-hidden after:duration-300 transition-all duration-300 dark:border-zinc-800 dark:hover:after:bg-neutral-900"
          >
            {skill.icon}
            <h2 className="text-sm font-bold uppercase tracking-wide leading-relaxed">{skill.name}</h2>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skill;
