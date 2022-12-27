'use client';

import Header from '../../../components/module/editor/Header';
import ConnectorsPanel from '../../../components/module/editor/ConnectorsPanel';
import GridEditor from '../../../components/module/editor/GridEditor';
import DetailPanel from '../../../components/module/editor/DetailPanel';

const Page = () => {

    return (
        <div className='flex flex-col w-full h-full'>
            <Header/>
            <div className='w-full h-full flex justify-between'>
                <ConnectorsPanel/>
                <GridEditor/>
                <DetailPanel/>
            </div>
        </div>
    )
}

export default Page;