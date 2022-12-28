import { FiAlertTriangle, FiCheck, FiShare2, FiMail, FiMenu } from 'react-icons/fi';
import { NodeType } from '../types/types';

const nodeTypes: NodeType[] = [
  {
    id: 'manualTrigger',
    name: 'Manual Trigger',
    icon: <FiShare2 className='w-6 h-6' />,
    output: ['next'],
  },
  {
    id: 'sendEmail',
    name: 'Send E-Mail',
    icon: <FiMail className='w-6 h-6' />,
    output: ['input', 'success', 'fail'],
  },
  {
    id: 'logResult',
    name: 'Log result',
    icon: <FiMenu className='w-6 h-6' />,
    output: ['input', 'next'],
  },
];

export default nodeTypes;
