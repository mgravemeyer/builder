import { FiCodesandbox, FiMoreVertical } from 'react-icons/fi';
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
      className='w-full h-16 bg-bLight text-bBright border-bPurple border-[2px] rounded-xl flex justify-between pl-5 pr-3 items-center mt-4 cursor-grab'
      draggable
      onDragStart={(event) => onDragStart(event)}
    >
      <div className='flex flex-row items-center gap-4 select-none text-[black]'>
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
