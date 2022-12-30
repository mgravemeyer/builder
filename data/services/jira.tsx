import { SiJira } from 'react-icons/si';
import { NodeType } from '../../types/types';

export const jira: NodeType[] = [
  {
    id: 'jiraCreateIssue',
    name: 'Create Issue',
    icon: <SiJira size={24} color={'black'} />,
    category: 'services',
    subCategory: 'jira',
    hasInput: true,
    hasOutput: true,
  },
];
