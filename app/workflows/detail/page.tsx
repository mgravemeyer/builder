'use client';

import Connectors from './connectors';
import Detail from './detail';
import Grid from './grid';
import Header from '../../../components/module/Header';
import {Position, useNodesState} from 'reactflow';

const Page = () => {

    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    };

    const initialNodes = [
        {
            id: '1',
            position: {x: 0, y: 150},
            data: {label: 'base style 1'},
            ...nodeDefaults,
        },
        {id: '2', position: {x: 250, y: 0}, data: {label: 'base style 2'}, ...nodeDefaults},
        {id: '3', position: {x: 250, y: 150}, data: {label: 'base style 3'}, ...nodeDefaults},
        {id: '4', position: {x: 250, y: 300}, data: {label: 'base style 4'}, ...nodeDefaults},
    ];
    const [nodes, setNodes, onNodesChange] = useNodesState<[]>(initialNodes);

    return (
        <div className='flex flex-col w-full h-full'>
            <Header/>
            <div className='w-full h-full flex justify-between'>
                <Connectors/>
                <Grid connectors={nodes} onChange={onNodesChange}/>
                {/*<Detail/>*/}
            </div>
        </div>
    )
}

export default Page;