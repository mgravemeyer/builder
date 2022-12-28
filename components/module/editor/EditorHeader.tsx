import { FiArrowLeft } from 'react-icons/fi';

const EditorHeader = () => {
  return (
    <div className='flex h-32 w-full flex-row items-center border-b-[1.5px] border-b-bPurple'>
      <div className='relative ml-7 flex cursor-pointer items-center justify-center p-5'>
        <FiArrowLeft color='black' style={{ width: '20px', height: '20px' }} className='absolute' />
        <div className='absolute h-full w-full rounded-full border-2 border-bPurple'></div>
      </div>
      <div className='ml-5 flex flex-col text-bBright'>
        <p className='text-bLightPurple'>Workflows</p>
        <p className='text-2xl text-[black]'>Mein eigener Workflow</p>
      </div>
    </div>
  );
};

export default EditorHeader;
