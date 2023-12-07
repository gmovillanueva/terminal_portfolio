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
      <p className='title'>{project.name}</p>
      <div className='columns'>
        <span className='col'>Description:</span>
        <span className='value'>{project.description}</span>
      </div>
      <div className='columns'>
        <span className='col'>Project Repository:</span>
        <a
          href={project.repo}
          target='_blank'
          className='value'
          rel='noreferrer'
        >
          {project.repo}
        </a>
      </div>
      {project.link && (
        <div className='columns'>
          <span className='col'>Live:</span>
          <a
            href={project.link}
            target='_blank'
            className='value'
            rel='noreferrer'
          >
            {project.link}
          </a>
        </div>
      )}
      {project.tech.length > 0 && (
        <div className='columns'>
          <span className='col'>Technologies:</span>
          <span className='value'>{project.tech.join(', ')}</span>
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
