'use client';
import { Handle, Position } from 'reactflow';
import nodeTypes from '../../data/nodeTypes';

function TextUpdaterNode({ data }: { data: { id: string } }) {
  const node = nodeTypes.filter((nodeType) => nodeType.id === data.id)[0]; //todo handle case where node can't be found

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center gap-2 border-[1px] border-bPurple ${
          node.category === 'triggers' ? 'rounded-full' : 'rounded-xl'
        } h-[70px] w-[70px]`}
      >
        {node?.hasInput ? (
          <Handle
            className="text-[8px] after:content-['→']"
            style={{ backgroundColor: '#474658' }}
            type='target'
            position={Position.Left}
            id='input'
          />
        ) : (
          <></>
        )}
        {node.icon}
        <label className='text-[10px] text-[black]' htmlFor='text'>
          {node.name}
        </label>
        {node?.hasYes ? (
          <Handle
            className="text-[8px] after:content-['✓']"
            style={{ backgroundColor: '#474658', top: '20px' }}
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
            style={{ backgroundColor: '#474658', top: '60px' }}
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
            style={{ backgroundColor: '#474658' }}
            type='source'
            position={Position.Right}
            id='output'
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default TextUpdaterNode;
