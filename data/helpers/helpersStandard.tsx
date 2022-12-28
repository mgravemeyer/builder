import { FiGitMerge } from 'react-icons/fi';
import { NodeType } from '../../types/types';

export const helpersStandard: NodeType[] = [
  {
    id: 'booleanCondition',
    name: 'Boolean',
    icon: <FiGitMerge size={24} color={'black'} />,
    category: 'helpers',
    subCategory: 'standard',
    hasInput: true,
    hasOutput: false,
    hasYes: true,
    hasNo: true,
  },
];
