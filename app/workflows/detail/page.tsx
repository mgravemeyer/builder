'use client';

import Connectors from './connectors';
import Detail from './detail';
import Grid from './grid';
import Header from '../../../components/module/Header';
import {Position, useNodesState} from 'reactflow';

const Page = () => {

    return (
        <div className='flex flex-col w-full h-full'>
            <Header/>
            <div className='w-full h-full flex justify-between'>
                <Connectors/>
                <Grid/>
                {/*<Detail/>*/}
            </div>
        </div>
    )
}

export default Page;