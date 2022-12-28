'use client';
import { Handle, Position } from 'reactflow';
import nodeTypes from '../../data/nodeTypes';

function TextUpdaterNode({ data }: { data: { id: string } }) {
  const handleStyleLeft = { left: 70 };
  const handleStyleRight = { left: 0 };

  const node = nodeTypes.filter((nodeType) => nodeType.id === data.id)[0]; //todo handle case where node can't be found

  return (
    <>
      <div className='flex flex-row items-center gap-4 border-bPurple border-[2px] rounded-xl w-52 h-20'>
        {node.output.includes('input') ? (
          <Handle
            className="text-[8px] after:content-['Input']"
            style={{ backgroundColor: '#474658' }}
            type='target'
            position={Position.Top}
            id='next'
          />
        ) : (
          <></>
        )}
        <div className='ml-4'>{node.icon}</div>
        <div className='flex flex-col justify-center'>
          <div className='h-fit'>{node ? <label htmlFor='text'>{node.name}</label> : <></>}</div>
          <div className='h-fit mt-[-5px]'>
            {node ? (
              <label className='text-xs' htmlFor='text'>
                Placeholder
              </label>
            ) : (
              <></>
            )}
          </div>
        </div>
        {node.output.includes('next') ? (
          <Handle
            className="text-[8px] after:content-['Next']"
            style={{ backgroundColor: '#474658' }}
            type='source'
            position={Position.Bottom}
            id='next'
          />
        ) : (
          <></>
        )}
        {node.output.includes('success') ? (
          <Handle
            className="text-[8px] after:content-['Success']"
            style={{ left: 70, backgroundColor: '#475846' }}
            type='source'
            position={Position.Bottom}
            id='success'
          />
        ) : (
          <></>
        )}
        {node.output.includes('fail') ? (
          <Handle
            className="text-[8px] text-bLight after:content-['Fail']"
            style={{ left: 140, backgroundColor: '#594646' }}
            type='source'
            position={Position.Bottom}
            id='fail'
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default TextUpdaterNode;
