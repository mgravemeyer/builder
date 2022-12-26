import { FiCodesandbox, FiMoreVertical } from 'react-icons/fi';

type ConnectorRowProps = {
    name: string
}
const ConnectorRow = ({ name } : ConnectorRowProps) => {

    return (
        <div className='w-full h-16 bg-bLight text-bBright border-bPurple border-[2px] rounded-xl flex justify-between pl-5 pr-3 items-center mt-4 cursor-grab'>
            <div className='flex flex-row w-100 gap-2 select-none'>
                <FiCodesandbox className='w-6 h-6'/>
                <p>{name}</p>
            </div>
            <div className='flex'>
                <FiMoreVertical/>
                <FiMoreVertical className='ml-[-10px]'/>
            </div>
        </div>
    )
}

export default ConnectorRow;