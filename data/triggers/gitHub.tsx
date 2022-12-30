import { FiGithub } from 'react-icons/fi';
import { NodeType } from '../../types/types';

export const gitHub: NodeType[] = [
  {
    id: 'gitNewIssueTrigger',
    name: 'New Issue',
    icon: <FiGithub size={24} color={'black'} />,
    category: 'triggers',
    subCategory: 'gitHub',
    hasOutput: true,
  },
];
