import { FiCodesandbox, FiMoreVertical } from 'react-icons/fi';
import {Connector} from '../../types/types';

type ConnectorRowProps = {
    connector: Connector
}
const ConnectorRow = ({ connector } : ConnectorRowProps) => {

    const onDragStart = (event: any) => {
        event.dataTransfer.setData('id', connector.name);
    }

    return (
        <div className='w-full h-16 bg-bLight text-bBright border-bPurple border-[2px] rounded-xl flex justify-between pl-5 pr-3 items-center mt-4 cursor-grab'
            draggable
            onDragStart={(event) => onDragStart(event)}>
            <div className='flex flex-row gap-2 select-none'>
                <FiCodesandbox className='w-6 h-6'/>
                <p>{connector.name}</p>
            </div>
            <div className='flex'>
                <FiMoreVertical/>
                <FiMoreVertical className='ml-[-10px]'/>
            </div>
        </div>
    )
}

export default ConnectorRow;