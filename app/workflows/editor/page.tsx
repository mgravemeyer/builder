'use client';

import Header from '../../../components/module/editor/Header';
import ConnectorsPanel from '../../../components/module/editor/ConnectorsPanel';
import GridEditor from '../../../components/module/editor/GridEditor';

const Page = () => {

    return (
        <div className='flex flex-col w-full h-full'>
            <Header/>
            <div className='w-full h-full flex justify-between'>
                <ConnectorsPanel/>
                <GridEditor/>
                {/*<Detail/>*/}
            </div>
        </div>
    )
}

export default Page;