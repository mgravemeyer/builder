import { FiGithub } from 'react-icons/fi';
import { NodeType } from '../../types/types';

export const triggersGitHub: NodeType[] = [
  {
    id: 'gitNewIssueTrigger',
    name: 'New Issue',
    icon: <FiGithub size={24} />,
    category: 'triggers',
    subCategory: 'gitHub',
    hasOutput: true,
  },
];
