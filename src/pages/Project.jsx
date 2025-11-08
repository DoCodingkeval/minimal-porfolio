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
      className="w-full scroll-mt-14 px-4 text-white xl:scroll-mt-18"
      id="project"
    >
        <h1 className="text-center text-3xl text-black lg:text-4xl dark:text-[#f9fafb]">
          My <span className="font-extrabold">Projects</span>
        </h1>
        <div className="grid text-black md:grid-cols-2 dark:text-neutral-300 mt-10">
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
                {project.projectName}
              </h2>
              <p className="text-gray text-xs leading-relaxed">{project.description}</p>
              <div className="flex items-center gap-6">
                <a href={project.liveLink} target="_blank" title={project.siteTitle}>
                  <IconExternalLink className='hover:scale-105 duration-200'/>
                </a>
                <a href={project.githubLink} target="_blank" title={project.githubTitle}>
                  <IconBrandGithub className='hover:scale-105 duration-200'/>
                </a>
              </div>
            </Card>
          ))}
        </div>
    </section>
  );
};

export default Project;
