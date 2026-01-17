import type { IconType } from 'react-icons';
import { SiRedux } from "react-icons/si"
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { BiData } from 'react-icons/bi';

export type Skill = {
  name: string;
  icon: IconType;
};

export const skills: Skill[] = [
  { name: 'HTML5', icon: FaHtml5 },
  // { name: 'Bootstrap', icon: FaBootstrap },
  // { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'SQL', icon: BiData },
];

