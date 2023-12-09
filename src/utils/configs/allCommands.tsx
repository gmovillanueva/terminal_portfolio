import { Command } from '@utils/types';

import About from '@components/Commands/About.tsx';
import Clear from '@components/Commands/Clear.tsx';
import Echo from '@components/Commands/Echo.tsx';
import Help from '@components/Commands/Help.tsx';
import Projects from '@components/Commands/Projects.tsx';
import Banner from '@components/Commands/Banner.tsx';
import ThemeInfo from '@components/Commands/ThemeInfo.tsx';
import Contact from '@components/Commands/Contact.tsx';
import Github from '@components/Commands/Github.tsx';
import Skills from '@components/Commands/Skills.tsx';
import GUI from '@components/Commands/GUI.tsx';
import WhoAmI from '@components/Commands/WhoAmI.tsx';
import Themes from '@components/Commands/Themes.tsx';

type Commands = { [key: string]: Command };

export const commands: Commands = {
  clear: {
    name: 'clear',
    description: 'sudo rm -f -r -v',
    run: Clear,
    type: 'utility',
  },
  help: {
    name: 'help',
    description: 'Well...',
    run: Help,
    type: 'utility',
  },
  theme: {
    name: 'theme',
    description: 'Check theme info.',
    run: ThemeInfo,
    type: 'utility',
  },
  themes: {
    name: 'themes',
    description: 'Check available themes.',
    run: Themes,
    type: 'utility',
  },
  about: {
    name: 'about',
    description: 'Need more info?',
    run: About,
    type: 'base',
  },
  contact: {
    name: 'contact',
    description: "Looking for your car's extended warranty?",
    run: Contact,
    type: 'base',
  },
  github: {
    name: 'github',
    description: 'Looking for my work?',
    run: Github,
    type: 'base',
  },
  projects: {
    name: 'projects',
    description: 'Stuff I made that I think was cool.',
    run: Projects,
    type: 'base',
  },
  skills: {
    name: 'skills',
    description: 'Things I am alright with.',
    run: Skills,
    type: 'base',
  },
  banner: {
    name: 'banner',
    description: 'Display the banner.',
    run: Banner,
    type: 'base',
  },
  echo: {
    name: 'echo',
    description: 'echo',
    run: Echo,
    type: 'fun',
  },
  gui: {
    name: 'gui',
    description: 'Install awesome GUI',
    run: GUI,
    type: 'fun',
  },
  whoami: {
    name: 'whoami',
    description: 'About the current user.',
    run: WhoAmI,
    type: 'fun',
  },
};
