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
      <p>{project.name}</p>
      <div className='ml-4'>
        <span className=''>Description:{'\xA0'}</span>
        <span className=''>{project.description}</span>
      </div>
      <div className='ml-4'>
        <span>Project Repository:{'\xA0'}</span>
        <a
          href={project.repo}
          target='_blank'
          className='text-color_11'
          rel='noreferrer'
        >
          {project.repo}
        </a>
      </div>
      {project.link && (
        <div className='ml-4'>
          <span className=''>Live:{'\xA0'}</span>
          <a
            href={project.link}
            target='_blank'
            className='text-color_11'
            rel='noreferrer'
          >
            {project.link}
          </a>
        </div>
      )}
      {project.tech.length > 0 && (
        <div className='ml-4'>
          <span className=''>Technologies Used:{'\xA0'}</span>
          <span className=''>{project.tech.join(', ')}</span>
        </div>
      )}
      <br />
    </div>
  );
};

const Projects = (args: string[]) => {
  if (args.length > 0)
    return <p>projects: {args.join(' ')} is not a valid command.</p>;
  const projects = getProject();

  return (
    <div className='ml-5'>
      <p className='my-2'>
        Unfortunately I could only make a small subset of my major projects are
        public. So here are some cool projects I have created over time to learn
        new skills.
      </p>
      <div>{projects.map((project, idx) => Project(project, idx))}</div>
    </div>
  );
};

export default Projects;
