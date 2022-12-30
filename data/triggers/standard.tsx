import { NodeType } from '../../types/types';
import { FiBell, FiClock, FiMousePointer } from 'react-icons/fi';

export const standard: NodeType[] = [
  {
    id: 'webhookTrigger',
    name: 'Webhook',
    icon: <FiBell size={24} color={'black'} />,
    category: 'triggers',
    subCategory: 'standard',
    hasOutput: true,
  },
  {
    id: 'timeRepeatTrigger',
    name: 'Time Repeat',
    icon: <FiClock size={24} color={'black'} />,
    category: 'triggers',
    subCategory: 'standard',
    hasOutput: true,
  },
  {
    id: 'buttonTrigger',
    name: 'Button',
    icon: <FiMousePointer size={24} color={'black'} />,
    category: 'triggers',
    subCategory: 'standard',
    hasOutput: true,
  },
];
