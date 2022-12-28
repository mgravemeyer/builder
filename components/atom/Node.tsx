'use client';
import { Handle, Position } from 'reactflow';
import nodeTypes from '../../data/nodeTypes';

function BuilderNode({ data }: { data: { id: string } }) {
  const node = nodeTypes.filter((nodeType) => nodeType.id === data.id)[0]; //todo handle case where node can't be found

  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className={`flex flex-col items-center justify-center gap-2 border-[1px] border-bPurple ${
          node.category === 'triggers' ? 'rounded-full' : 'rounded-xl'
        } h-[50px] w-[50px]`}
      >
        {node?.hasInput ? (
          <Handle
            className="text-[8px] after:content-['→']"
            style={{ backgroundColor: '#474658', top: '27px' }}
            type='target'
            position={Position.Left}
            id='input'
          />
        ) : (
          <></>
        )}
        {node.icon}
        {node?.hasYes ? (
          <Handle
            className="text-[8px] after:content-['✓']"
            style={{ backgroundColor: '#474658', top: '14px' }}
            type='source'
            position={Position.Right}
            id='yes'
          />
        ) : (
          <></>
        )}
        {node?.hasNo ? (
          <Handle
            className="text-[8px] after:content-['✗']"
            style={{ backgroundColor: '#474658', top: '37px' }}
            type='source'
            position={Position.Right}
            id='no'
          />
        ) : (
          <></>
        )}
        {node?.hasOutput ? (
          <Handle
            className="text-[8px] after:content-['→']"
            style={{ backgroundColor: '#474658', top: '27px' }}
            type='source'
            position={Position.Right}
            id='output'
          />
        ) : (
          <></>
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
}

export default BuilderNode;
