import { FiArrowLeft } from 'react-icons/fi';

const EditorHeader = () => {
  return (
    <div className='h-32 w-full border-b-[2px] border-b-bPurple flex flex-row items-center'>
      <div className='relative flex justify-center items-center p-5 ml-7 cursor-pointer'>
        <FiArrowLeft color='black' style={{ width: '20px', height: '20px' }} className='absolute' />
        <div className='w-full h-full rounded-full border-bPurple border-2 absolute'></div>
      </div>
      <div className='flex flex-col ml-5 text-bBright'>
        <p className='text-bLightPurple'>Workflows</p>
        <p className='text-[black] text-2xl'>Mein eigener Workflow</p>
      </div>
    </div>
  );
};

export default EditorHeader;
