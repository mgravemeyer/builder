import { FiMoreVertical } from 'react-icons/fi';
import { NodeType } from '../../types/types';

type ConnectorRowProps = {
  connector: NodeType;
};
const ConnectorRow = ({ connector }: ConnectorRowProps) => {
  const onDragStart = (event: any) => {
    event.dataTransfer.setData('id', connector.id);
  };

  return (
    <div
      className='mt-4 flex h-16 w-full cursor-grab items-center justify-between rounded-xl border-[1px] border-bPurple bg-bLight pl-5 pr-3 text-bBright'
      draggable
      onDragStart={(event) => onDragStart(event)}
    >
      <div className='flex select-none flex-row items-center gap-4 text-[black]'>
        {connector.icon}
        <p>{connector.name}</p>
      </div>
      <div className='flex'>
        <FiMoreVertical color='black' />
        <FiMoreVertical color='black' className='ml-[-10px]' />
      </div>
    </div>
  );
};

export default ConnectorRow;
