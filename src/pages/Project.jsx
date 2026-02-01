import Card from '../components/Card';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { projects, Lens } from '../imports/Files';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Project = () => {
      useGSAP(()=>{
      gsap.to("#project .heading",{
        '--width':'100%',
        duration:1,
        scrollTrigger:{
          trigger:"#project .heading",
          start:"top 70%",
          once:true,
        }
      })
    })
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
        <h2 className="text-center text-3xl text-black lg:text-4xl w-max p-2 mx-auto xl:text-5xl heading dark:text-[#f9fafb] mb-10">
          My <span className="font-extrabold">Projects</span>
        </h2>
        <div className="grid text-black sm:grid-cols-2 dark:text-neutral-300">
          {projects.map((project) => (
            <Card key={project.id} className="px-4 py-6">
              <Lens>
                <img
                  src={project.image}
                  className="rounded-xl mask-x-from-85% dark:mask-x-from-90%"
                  alt="weather app"
                  loading="lazy"
                />
              </Lens>
              <span className="mt-3 text-2xl font-extrabold">{`0${project.id}`}</span>
              <h3 className="text-lg xl:text-xl font-extrabold tracking-tight">
                {project.projectName}
              </h3>
              <p className="text-gray text-xs md:text-sm lg:text-base leading-relaxed">{project.description}</p>
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
