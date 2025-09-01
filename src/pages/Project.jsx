import Card from '../components/Card';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { projects, Lens } from '../imports/Files';

const Project = () => {
  return (
    <section
      style={{
        backgroundImage:
          'radial-gradient(.5px .5px, rgba(0,0,0,.4) 1px, transparent 0)',
        backgroundSize: '16px 16px',
      }}
      className="my-10 min-h-screen w-full scroll-mt-14 px-4 text-white xl:scroll-mt-18"
      id="project"
    >
      <div className="h-full">
        <h1 className="py-10 text-center text-3xl text-black lg:text-4xl dark:text-[#f9fafb]">
          My <span className="font-extrabold">Projects</span>
        </h1>
        <div className="grid text-black md:grid-cols-2 dark:text-neutral-300">
          {projects.map((project) => (
            <Card key={project.id}>
              <Lens>
                <img
                  src={project.image}
                  className="rounded-xl mask-x-from-85% dark:mask-x-from-90%"
                  alt="weather app"
                  loading="lazy"
                />
              </Lens>
              <span className="mt-3 text-xl font-extrabold">{`0${project.id}`}</span>
              <h2 className="text-lg font-extrabold tracking-tight">
                {project.title}
              </h2>
              <p className="text-gray text-xs">{project.description}</p>
              <div className="flex items-center gap-6">
                <a href={project.liveLink} target="_blank">
                  <IconExternalLink />
                </a>
                <a href={project.githubLink} target="_blank">
                  <IconBrandGithub />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
