import { FiMail, FiMenu, FiMessageCircle, FiClock } from 'react-icons/fi';
import { NodeType } from '../../types/types';

export const standard: NodeType[] = [
  {
    id: 'sendEmail',
    name: 'Send E-Mail',
    icon: <FiMail size={24} color={'black'} />,
    category: 'core',
    subCategory: 'standard',
    hasInput: true,
    hasOutput: false,
  },
  {
    id: 'sendSMS',
    name: 'Send SMS',
    icon: <FiMessageCircle size={24} color={'black'} />,
    category: 'core',
    subCategory: 'standard',
    hasInput: true,
    hasOutput: false,
  },
  {
    id: 'setTimeout',
    name: 'Timeout',
    icon: <FiClock size={24} color={'black'} />,
    category: 'core',
    subCategory: 'standard',
    hasInput: true,
    hasOutput: true,
  },
  {
    id: 'logResult',
    name: 'Log result',
    icon: <FiMenu size={24} color={'black'} />,
    category: 'core',
    subCategory: 'standard',
    hasInput: true,
    hasOutput: false,
  },
];
