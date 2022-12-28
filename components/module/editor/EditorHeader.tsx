import { FiArrowLeft } from 'react-icons/fi';
import { IoReturnUpBack, IoReturnUpForward } from 'react-icons/io5';

const EditorHeader = () => {
  return (
    <div className='flex h-32 w-full items-center justify-between border-b-[1.5px] border-b-bPurple'>
      <div className='flex flex-row items-center'>
        <div className='relative ml-7 flex cursor-pointer items-center justify-center p-5'>
          <FiArrowLeft
            color='black'
            style={{ width: '20px', height: '20px' }}
            className='absolute'
          />
          <div className='absolute h-full w-full rounded-full border-2 border-bPurple'></div>
        </div>
        <div className='ml-5 flex flex-col text-bBright'>
          <p className='text-bLightPurple'>Workflows</p>
          <p className='text-2xl text-[black]'>Mein eigener Workflow</p>
        </div>
      </div>
      <div className='mr-12 flex gap-4'>
        <div className='flex flex-row gap-2'>
          <IoReturnUpBack color='black' style={{ width: '30px', height: '30px' }} />
          <IoReturnUpForward color='black' style={{ width: '30px', height: '30px' }} />
        </div>
        <p>Saved 3 min ago</p>
      </div>
    </div>
  );
};

export default EditorHeader;
