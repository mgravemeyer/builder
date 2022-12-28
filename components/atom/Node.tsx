'use client';
import { Handle, Position } from 'reactflow';
import nodeTypes from '../../data/nodeTypes';

function TextUpdaterNode({ data }: { data: { id: string } }) {
  const node = nodeTypes.filter((nodeType) => nodeType.id === data.id)[0]; //todo handle case where node can't be found

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-2 border-bPurple border-[2px] rounded-xl w-[80px] h-[80px]'>
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
        <label className='text-[12px]' htmlFor='text'>
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
