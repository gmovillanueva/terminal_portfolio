import { getProject } from '@functions/getProjects.ts';

type Project = {
  name: string;
  description: string;
  repo: string;
  link?: string;
  tech: string[];
};

const Project = (project: Project, key: number) => {
  return (
    <div key={key}>
      <p className=''>{project.name}</p>
      <div className=''>
        <span className=''>Description:{'\xA0'}</span>
        <span className=''>{project.description}</span>
      </div>
      <div className=''>
        <span>Project Repository:{'\xA0'}</span>
        <a
          href={project.repo}
          target='_blank'
          className='text-color_02'
          rel='noreferrer'
        >
          {project.repo}
        </a>
      </div>
      {project.link && (
        <div className=''>
          <span className=''>Live:{'\xA0'}</span>
          <a
            href={project.link}
            target='_blank'
            className=''
            rel='noreferrer'
          >
            {project.link}
          </a>
        </div>
      )}
      {project.tech.length > 0 && (
        <div className=''>
          <p>
            Unfortunately I could only make a small subset of my major projects
            public.
          </p>
          <span className=''>Technologies:{'\xA0'}</span>
          <span className=''>{project.tech.join(', ')}</span>
        </div>
      )}
      <br />
    </div>
  );
};

const Projects = (args: string[]) => {
  if (args.length > 0)
    return <p>projects: {args.join(' ')} is not valid command</p>;
  const projects = getProject();

  return <div>{projects.map((project, idx) => Project(project, idx))}</div>;
};

export default Projects;
