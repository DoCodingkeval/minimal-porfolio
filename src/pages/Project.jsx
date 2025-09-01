import Card from "../components/Card";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { projects, Lens } from "../imports/Files";

const Project = () => {
  return (
    <section
      style={{
        backgroundImage:
          "radial-gradient(.5px .5px, rgba(0,0,0,.4) 1px, transparent 0)",
        backgroundSize: "16px 16px",
      }}
      className="w-full min-h-screen px-4 text-white my-10 scroll-mt-14 xl:scroll-mt-18"
      id="project"
    >
      <div className="h-full">
        <h1 className="text-3xl lg:text-4xl text-center text-black dark:text-[#f9fafb] py-10">
          My <span className="font-extrabold">Projects</span>
        </h1>
        <div className="grid md:grid-cols-2 text-black dark:text-neutral-300">
          {projects.map((project) => (
            <Card key={project.id}>
              <Lens>
                <img
                  src={project.image}
                  className="rounded-xl mask-x-from-85% dark:mask-x-from-90%"
                  alt="weather app"
                />
              </Lens>
              <span className="font-extrabold text-xl mt-3">{`0${project.id}`}</span>
              <h2 className="font-extrabold text-lg tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs text-gray">{project.description}</p>
              <div className="flex gap-6 items-center">
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
