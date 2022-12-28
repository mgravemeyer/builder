'use client';

import { Handle, Position } from 'reactflow';
import nodeTypes from '../../data/nodeTypes';

const NodeConnector = ({
  id,
  symbol,
  topOffset,
  position,
  type,
}: {
  id: string;
  symbol: string;
  topOffset: number;
  position: Position;
  type: 'target' | 'source';
}) => {
  return (
    <Handle
      className={`text-[8px] after:content-['${symbol}']`}
      style={{ backgroundColor: '#474658', top: `${topOffset}px` }}
      type={type}
      position={position}
      id={id}
    />
  );
};

const BuilderNode = ({ data }: { data: { id: string } }) => {
  const node = nodeTypes.filter((nodeType) => nodeType.id === data.id)[0]; //todo handle case where node can't be found

  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className={`flex flex-col items-center justify-center gap-2 border-[1px] border-bPurple ${
          node.category === 'triggers' ? 'rounded-full' : 'rounded-xl'
        } h-[50px] w-[50px]`}
      >
        {node?.hasInput && (
          <NodeConnector
            id={'input'}
            symbol={'→'}
            topOffset={27}
            position={Position.Left}
            type={'target'}
          />
        )}
        {node.icon}
        {node?.hasYes && (
          <NodeConnector
            id={'yes'}
            symbol={'✓'}
            topOffset={14}
            position={Position.Right}
            type={'source'}
          />
        )}
        {node?.hasNo && (
          <NodeConnector
            id={'no'}
            symbol={'✗'}
            topOffset={37}
            position={Position.Right}
            type={'source'}
          />
        )}
        {node?.hasOutput && (
          <NodeConnector
            id={'output'}
            symbol={'→'}
            topOffset={27}
            position={Position.Right}
            type={'source'}
          />
        )}
      </div>
      <label
        className='w-18 absolute top-[50px] flex w-20 items-center justify-center text-[10px] text-[black]'
        htmlFor='text'
      >
        {node.name}
      </label>
    </div>
  );
};

export default BuilderNode;
