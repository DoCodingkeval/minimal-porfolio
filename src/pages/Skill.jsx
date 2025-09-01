import Card from "../components/Card";
import { skills } from "../constants";

const Skill = () => {
  return (
    <section
      className="w-full h-full sm:px-10 py-10 scroll-mt-14 xl:scroll-mt-20"
      id="skill"
    >
      <h1 className="text-3xl lg:text-4xl text-center mb-10">
        My <span className="font-extrabold">Skills</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-12">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="border-2 border-black items-center hover:bg-black hover:text-white transition-all duration-200 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            {skill.icon}
            <h1 className="font-bold text-md">{skill.name}</h1>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skill;
