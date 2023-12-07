import projects from '@configs/projects.json';
export const isValidProject = (project: string) => {
  return project in projects;
};
